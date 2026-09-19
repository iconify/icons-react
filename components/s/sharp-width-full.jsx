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
		"content": `<style>.gisuwpb2l {
  fill: currentColor;
  d: path("M22 4H2v16h20zM4 6h1v12H4zm16 12h-1V6h1z");
}
</style><path class="gisuwpb2l"/>`,
		"fallback": "ic:sharp-width-full",
	});
}

export default Component;
