import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":512,"height":165};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m14vz84og {
  fill: var(--svg-color--c12127, #c12127);
  d: path("M157.538 164.103h65.641v-32.82h65.642V0H157.538zM223.18 32.82H256v65.64h-32.82zM315.077 0v131.282h65.64V32.821h32.821v98.461h32.821V32.821h32.82v98.461H512V0zM0 131.282h65.641V32.821h32.82v98.461h32.821V0H0z");
}
</style><path class="m14vz84og"/>`,
		"fallback": "logos:npm",
	});
}

export default Component;
