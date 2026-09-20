import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xla7kib8f {
  fill: currentColor;
  d: path("M5 20v-6h3v6zm6 0V9h3v11z");
}
</style><path class="xla7kib8f"/>`,
		"fallback": "material-symbols:signal-cellular-alt-2-bar-outline",
	});
}

export default Component;
