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
		"content": `<style>.o6om72bnq {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m10.345 20.61H27.68v6.673h12.854v5.039H27.68v12.166h-6.024V17.512h20.689z");
}
</style><path class="o6om72bnq"/>`,
		"fallback": "emojione-monotone:letter-f",
	});
}

export default Component;
