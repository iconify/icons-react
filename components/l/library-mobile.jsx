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
		"content": `<style>.t9biodbvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 39V9C23.699 9 24 29.696 24 39c0-9.304.301-30-19.5-30v30");
}
</style><path class="t9biodbvt"/>`,
		"fallback": "arcticons:library-mobile",
	});
}

export default Component;
