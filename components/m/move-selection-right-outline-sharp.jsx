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
		"content": `<style>.ctau_ebvj {
  fill: currentColor;
  d: path("M10 18V6h12v12zm2-2h8V8h-8zm-6 2v-2h2v2zM6 8V6h2v2zM2 18v-2h2v2zm0-5v-2h2v2zm0-5V6h2v2zm14 4");
}
</style><path class="ctau_ebvj"/>`,
		"fallback": "material-symbols:move-selection-right-outline-sharp",
	});
}

export default Component;
