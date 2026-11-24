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
		"content": `<style>.fpt96winx {
  fill: currentColor;
  d: path("M3.414 4h17.172l-6 6H9.414ZM2 5.414l6.293 6.293A1 1 0 0 0 9 12h2v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm20 0V11a1 1 0 0 1-1 1h-5.586ZM13 21v-3c0-.265.105-.52.293-.707l4-4a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 17 22h-3a1 1 0 0 1-1-1");
}
</style><path class="fpt96winx"/>`,
		"fallback": "coolicons:mail-edit-corner-fill-sharp",
	});
}

export default Component;
