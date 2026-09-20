import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s9x4u3bnz {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.5H3zm0 4.5V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3.5z");
}
</style><path class="s9x4u3bnz"/>`,
		"fallback": "fluent:layout-row-two-20-filled",
	});
}

export default Component;
