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

.k_eyoabrm {
  stroke-linejoin: round;
  d: path("M22 2L21 3L13 11L12 12M22 7.34375V2H16.6562M12 8V12H16");
}

.spi__0but {
  d: path("M2.00018 11.9994C2.00018 16.7135 2.00018 19.0705 3.46465 20.535C4.92912 21.9994 7.28614 21.9994 12.0002 21.9994C16.7142 21.9994 19.0713 21.9994 20.5357 20.535C21.8927 19.1779 21.9923 17.0545 21.9996 12.9994M11.0002 2C6.94512 2.0073 4.82168 2.10686 3.46465 3.46389C2.64808 4.28046 2.28682 5.37454 2.12699 7");
}
</style><g class="ipq1z-bjh"><path class="spi__0but"/><path class="k_eyoabrm"/></g>`,
		"fallback": "solar:scaling-broken",
	});
}

export default Component;
