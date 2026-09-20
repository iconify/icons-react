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
		"content": `<style>.r77020bir {
  fill: currentColor;
  d: path("M19 15q-1.275 0-2.137-.862T16 12t.863-2.137T19 9t2.138.863T22 12t-.862 2.138T19 15m-8.825-2H3q-.425 0-.712-.288T2 12t.288-.712T3 11h7.175L8.3 9.1q-.275-.275-.288-.687T8.3 7.7q.275-.275.7-.275t.7.275l3.6 3.6q.3.3.3.7t-.3.7l-3.6 3.6q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7z");
}
</style><path class="r77020bir"/>`,
		"fallback": "material-symbols:step-rounded",
	});
}

export default Component;
