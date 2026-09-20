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
		"content": `<style>.x8tnhzbwg {
  fill: currentColor;
  d: path("M5 20v-6h3v6zm6 0V9h3v11zm6 0V4h3v16z");
}
</style><path class="x8tnhzbwg"/>`,
		"fallback": "material-symbols:signal-cellular-alt-sharp",
	});
}

export default Component;
