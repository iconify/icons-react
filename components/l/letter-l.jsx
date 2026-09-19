import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dtoxhe39s {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m11.275 44.508h-20.55V17.492h6.063v23.799h14.488z");
}
</style><path class="dtoxhe39s"/>`,
		"fallback": "emojione-monotone:letter-l",
	});
}

export default Component;
