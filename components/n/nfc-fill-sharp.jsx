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
		"content": `<style>.o3z2v3bcv {
  fill: currentColor;
  d: path("M3 2h12v11.586L8.707 7.293A1 1 0 0 0 7 8v14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m14 0h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H9V10.414l6.293 6.293A1 1 0 0 0 17 16Z");
}
</style><path class="o3z2v3bcv"/>`,
		"fallback": "coolicons:nfc-fill-sharp",
	});
}

export default Component;
