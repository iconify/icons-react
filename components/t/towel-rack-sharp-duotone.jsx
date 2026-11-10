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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hk9-apbzq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 2C20.552 2 21 2.45 21 3V6H23V8H21V21C21 21.55 20.552 22 20 22H9C8.448 22 8 21.55 8 21V16H4C3.448 16 3 15.55 3 15V8H1V6H3V5.5C3 3.57 4.567 2 6.5 2H20Z");
}

.pp8we0b8j {
  d: path("M21 18V21C21 21.55 20.552 22 20 22H9C8.448 22 8 21.55 8 21V18H21ZM20 2C20.552 2 21 2.45 21 3V6H23V8H21V16H8V8H1V6H8V2H20Z");
}
</style><g class="cuyn6tgcc"><path class="hk9-apbzq"/><path class="pp8we0b8j"/></g>`,
		"fallback": "keyline-icons:towel-rack-sharp-duotone",
	});
}

export default Component;
