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
		"content": `<style>.a9gnsbcxi {
  d: path("M4.75 6H19.25");
}

.cm8bnlhui {
  d: path("M16.5 13.5H22C22 15.0188 20.7688 16.25 19.25 16.25C17.7312 16.25 16.5 15.0188 16.5 13.5Z");
}

.cutccm7gi {
  d: path("M12 2.5V21.5M12 21.5H7.5M12 21.5H16.5M2 13.5L4.75 6L7.5 13.5M16.5 13.5L19.25 6L22 13.5");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.h3fs5ybox {
  d: path("M2 13.5H7.5C7.5 15.0188 6.2688 16.25 4.75 16.25C3.2312 16.25 2 15.0188 2 13.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cutccm7gi"/><path class="a9gnsbcxi"/><path class="h3fs5ybox"/><path class="cm8bnlhui"/></g>`,
		"fallback": "solar:justice-scale-line-duotone",
	});
}

export default Component;
