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
		"content": `<style>.njsn_20nk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3v17.5m-3.5 0h17M7 3.5l11.5 4.25L7 12");
}
</style><path class="njsn_20nk"/>`,
		"fallback": "uix-sharp:kickoff-meeting",
	});
}

export default Component;
