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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8i7chb6v {
  d: path("M4 5.75h16q.75 0 .75.75v3.25q0 .75-.75.75h-9q-.75 0-.88.74l-1.49 8.27q-.13.74-.88.74H4.5q-.75 0-.64-.74l1.28-8.27q.11-.74-.64-.74H4q-.75 0-.75-.75V6.5q0-.75.75-.75");
}

.zkyzxr38v {
  d: path("M9.5 14.5h3a1.25 1.25 0 0 0 1.25-1.25V10.5");
}
</style><g class="hntgybcog"><path class="w8i7chb6v"/><path class="zkyzxr38v"/></g>`,
		"fallback": "iconoven:light-gun",
	});
}

export default Component;
