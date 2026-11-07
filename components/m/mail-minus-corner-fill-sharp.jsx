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
		"content": `<style>.v1zw8acnv {
  fill: currentColor;
  d: path("m4.414 5l-1-1h17.172l-6 6H9.414ZM2 19V5.414l6.293 6.293A1 1 0 0 0 9 12h3v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1M20 7.414l2-2V11a1 1 0 0 1-1 1h-5.586ZM15 16h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}
</style><path class="v1zw8acnv"/>`,
		"fallback": "coolicons:mail-minus-corner-fill-sharp",
	});
}

export default Component;
