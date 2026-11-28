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
		"content": `<style>.d8jyrckff {
  stroke-opacity: 0.4;
  d: path("M3.427 14.9172L3.212 13.9407C3.071 13.3034 3 12.6527 3 12C3 7.0294 7.029 3 12 3C14.483 3 16.856 4.0259 18.557 5.8349L19.013 6.3204M19.837 2.1414L19.2 6.5999L14.741 5.9631");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r2ktbdker {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 16C13 16.5523 12.552 17 12 17C11.448 17 11 16.5523 11 16C11 15.4477 11.448 15 12 15C12.552 15 13 15.4477 13 16Z");
  stroke: none;
}

.y8_kpxbrl {
  d: path("M20.573 9.0828L20.788 10.0593C20.929 10.6966 21 11.3473 21 12C21 16.9706 16.971 21 12 21C9.517 21 7.144 19.9741 5.443 18.1651L4.987 17.6796M4.163 21.8586L4.8 17.4001L9.259 18.0369M12 7V13");
}
</style><g class="gp_8x1bzb"><path class="d8jyrckff"/><path class="y8_kpxbrl"/><path clip-rule="evenodd" class="r2ktbdker"/></g>`,
		"fallback": "keyline-icons:refresh-cw-alert-sharp-two-tone",
	});
}

export default Component;
