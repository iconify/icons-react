import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.osban7b8i {
  fill: var(--svg-color--006ca2, #006ca2);
  d: path("M21.48 13.03h86.74V128H21.48z");
}

.s62ephjse {
  fill: var(--svg-color--78a3ad, #78a3ad);
  d: path("M105.83 2.78H22.16c-5.08 0-9.24 4.15-9.24 9.24V128h35.6v-13.36c0-2.83 2.31-5.15 5.14-5.15h20.66c2.84 0 5.16 2.32 5.16 5.15V128h35.6V12.02c-.01-5.08-4.16-9.24-9.25-9.24m-67.68 85.4h-13v-15.7h13zm0-24.96h-13v-15.7h13zm0-24.95h-13v-15.7h13zm21.79 49.91H46.93v-15.7h13.01zm0-24.96H46.93v-15.7h13.01zm0-24.95H46.93v-15.7h13.01zm21.78 49.91h-13v-15.7h13zm0-24.96h-13v-15.7h13zm0-24.95h-13v-15.7h13zm21.79 49.91H90.5v-15.7h13.01zm0-24.96H90.5v-15.7h13.01zm0-24.95H90.5v-15.7h13.01z");
}

.vzdm9tbfc {
  fill: var(--svg-color--006ca2, #006ca2);
  d: path("M19.3 17.3h91.21v79.87H19.3z");
}
</style><path class="osban7b8i"/><path class="vzdm9tbfc"/><path class="s62ephjse"/>`,
		"fallback": "noto-v1:office-building",
	});
}

export default Component;
