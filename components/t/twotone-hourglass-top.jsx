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
		"content": `<style>.i7o939a4z {
  fill: currentColor;
  d: path("M18 2H6v6l4 4l-3.99 4.01L6 22h12l-.01-5.99L14 12l4-3.99zm-2 14.5V20H8v-3.5l4-4zm0-9l-4 4l-4-4V4h8z");
}

.pfsdhbbki {
  opacity: var(--svg-opacity--0-3, 0.3);
}

.wln8vzbzq {
  fill: currentColor;
  d: path("m8 7.5l4 4l4-4V4H8z");
}
</style><defs><path id="SVG51ifd67j" class="wln8vzbzq"/></defs><use href="#SVG51ifd67j" class="pfsdhbbki"/><use href="#SVG51ifd67j" class="pfsdhbbki"/><path class="i7o939a4z"/>`,
		"fallback": "ic:twotone-hourglass-top",
	});
}

export default Component;
