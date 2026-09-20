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
		"content": `<style>.mw6r_hwev {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V7H5zm4.068-3.834Q7.763 14.333 7.096 13q.667-1.333 1.972-2.166Q10.373 10 12 10t2.932.834T16.904 13q-.667 1.333-1.972 2.166Q13.627 16 12 16t-2.932-.834m2.139-1.373q-.323-.322-.323-.793t.323-.793q.322-.323.793-.323t.793.323q.323.322.323.793t-.323.793q-.322.323-.793.323t-.793-.323m2.126.54q.552-.552.552-1.333t-.552-1.333T12 11.115t-1.333.552T10.115 13t.552 1.333t1.333.552t1.333-.552");
}
</style><path class="mw6r_hwev"/>`,
		"fallback": "material-symbols-light:preview-sharp",
	});
}

export default Component;
