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
		"content": `<style>.lwe4cgesq {
  d: path("M7 5.5h7v4H7Zm.75 8h.01m2.74 0h.01m-2.76 3h.01m2.74 0h.01M21 15l-5.25 5.25m-.25-4v4.25h4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v9qz8ac0d {
  d: path("M12.7 21.5H4.5v-19h12v10.9");
}
</style><g class="ulnmmdpxh"><path class="v9qz8ac0d"/><path class="lwe4cgesq"/></g>`,
		"fallback": "uix-sharp:treasury-merchant-settlement",
	});
}

export default Component;
