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
		"content": `<style>.six41ccjh {
  fill: currentColor;
  d: path("m4.414 5l-1-1h17.172l-6 6H9.414ZM2 19V5.414l6.293 6.293A1 1 0 0 0 9 12h3v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m14.414-8L22 5.414V11a1 1 0 0 1-.999 1a5.01 5.01 0 0 0-5.006-.581ZM15 16a3 3 0 1 1 3 3a1 1 0 0 1 0-2a1.001 1.001 0 0 0 .707-1.707a1 1 0 0 0-1.094-.215A.99.99 0 0 0 17 16a1 1 0 0 1-2 0m3 4h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2");
}
</style><path class="six41ccjh"/>`,
		"fallback": "coolicons:mail-help-corner-fill-sharp",
	});
}

export default Component;
