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
		"content": `<style>.t2ly_x11v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 14.03L6.563 33.37l9.187-20.76c.916-2.07 2.513-2.65 4.58-2.65h6.06l3.159 11.375m-5.483 8.706L12.411 38.04H4.5h0l39-20.917");
}

.uid06s3yz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.726 24.409l7.632-.157l3.83 13.788h-8.214l-1.908-8.002m-7.326-1.996l4.01-9.402h.606l1.48 6.21");
}
</style><path class="uid06s3yz"/><path class="t2ly_x11v"/>`,
		"fallback": "arcticons:kai-access",
	});
}

export default Component;
