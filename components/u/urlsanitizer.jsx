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
		"content": `<style>.lfqqr7b-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.945 33.789l-6.942 6.942c-2.679 2.678-7.539 2.162-10.217-.517s-3.195-7.538-.517-10.217l10.283-10.283c2.679-2.678 7.539-2.162 10.217.517");
}

.p5uglcvuo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.055 14.212l6.942-6.943c2.679-2.678 7.539-2.162 10.217.517s3.195 7.538.517 10.217L30.448 28.286c-2.679 2.678-7.538 2.162-10.217-.517");
}
</style><path class="p5uglcvuo"/><path class="lfqqr7b-l"/>`,
		"fallback": "arcticons:urlsanitizer",
	});
}

export default Component;
