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
		"content": `<style>.fxcg3tdjq {
  d: path("M15 17.75a3 3.75 0 1 0 6 0a3 3.75 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wnujm7ngn {
  fill: currentColor;
  d: path("M16.75 18.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.zqswe3jjf {
  d: path("M12.7 20.5H3.5V5h17v6.8M8 3v4m8-4v4M3.5 10h17m-13 3.5h.01m3.74 0h.01M7.5 17.25h.01m3.74 0h.01");
}
</style><g class="ulnmmdpxh"><path class="zqswe3jjf"/><path class="fxcg3tdjq"/><path class="wnujm7ngn"/></g>`,
		"fallback": "uix-sharp:ovulation-tracker",
	});
}

export default Component;
