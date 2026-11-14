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
		"content": `<style>.p6oq9egqp {
  d: path("M6 2.5h12v19H6ZM10.5 18h3M12 6v5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vr6sjkbto {
  d: path("m9.5 9l2.5 2.5L14.5 9M9 14.5h6");
}
</style><g class="ulnmmdpxh"><path class="p6oq9egqp"/><path class="vr6sjkbto"/></g>`,
		"fallback": "uix-sharp:smartphone-download",
	});
}

export default Component;
