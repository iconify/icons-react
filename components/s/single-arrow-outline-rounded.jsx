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
		"content": `<style>.fpi1t4bfg {
  fill: currentColor;
  d: path("m14.352 12l-4.086-5.713q-.177-.25-.04-.519t.44-.268q.12 0 .228.056q.109.057.17.157L15.57 12l-4.507 6.287q-.061.1-.171.157t-.231.056q-.293 0-.433-.268t.037-.518z");
}
</style><path class="fpi1t4bfg"/>`,
		"fallback": "material-symbols-light:single-arrow-outline-rounded",
	});
}

export default Component;
