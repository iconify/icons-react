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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ktz4j74-r {
  d: path("M14.5 16.4999C14.5 17.8806 13.3807 18.9999 12 18.9999C10.6193 18.9999 9.5 17.8806 9.5 16.4999C9.5 15.1192 10.6193 13.9999 12 13.9999C13.3807 13.9999 14.5 15.1192 14.5 16.4999Z");
}

.nl9qzn-xd {
  d: path("M15 6V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11.3477C9 11.6857 8.82505 11.9957 8.56141 12.2072C7.30465 13.2152 6.5 14.7636 6.5 16.5C6.5 19.5376 8.96243 22 12 22C15.0376 22 17.5 19.5376 17.5 16.5C17.5 14.7636 16.6954 13.2152 15.4386 12.2072C15.1749 11.9957 15 11.6857 15 11.3477V10");
}

.w0kh5pr9u {
  d: path("M12 8V5M12 14V12");
}
</style><g class="ipq1z-bjh"><path class="nl9qzn-xd"/><path class="ktz4j74-r"/><path class="w0kh5pr9u"/></g>`,
		"fallback": "solar:temperature-broken",
	});
}

export default Component;
