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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ws_wfzbby {
  d: path("M21.3675 8.5C21.7858 9.6195 22 10.8049 22 12C22 13.1951 21.7858 14.3805 21.3675 15.5M2.6325 15.5C2.2142 14.3805 2 13.1951 2 12C2 10.8049 2.2142 9.6195 2.6325 8.5");
}

.ymrndxtfi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14 3C16.2092 3 18 4.79082 18 7V17C18 19.2092 16.2092 21 14 21H10C7.79082 21 6 19.2092 6 17V7C6 4.79082 7.79082 3 10 3H14ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H11Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="ymrndxtfi"/><path class="ws_wfzbby"/></g>`,
		"fallback": "keyline-icons:smartphone-ringing-fill",
	});
}

export default Component;
