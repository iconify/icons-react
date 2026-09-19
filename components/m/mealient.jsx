import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eqt75gbjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.344 33.113h35.378v4.457c0 1.4-.399 2.328-2.061 2.328H8.406c-1.558 0-2.062-.732-2.062-2.328zM5.5 27.726c1.664-.067 2.235-2.728 5.5-2.728s3.125 2.727 6.716 2.727s3.302-2.727 6.218-2.727s3.486 2.727 6.417 2.727s3.157-2.727 6.517-2.727s3.434 2.794 5.632 2.727m-.445-8.646C42.002 15.614 39.972 7.988 24 8.102c-15.971.115-17.98 7.13-18.055 11.109z");
}
</style><path class="eqt75gbjv"/>`,
		"fallback": "arcticons:mealient",
	});
}

export default Component;
