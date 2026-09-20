import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.f_dihdcpw {
  d: path("M224 71.85v112.3a7.91 7.91 0 0 1-12.18 6.59l-88.19-56.15a7.8 7.8 0 0 1 0-13.18l88.19-56.15A7.91 7.91 0 0 1 224 71.85m-116.18-6.59l-88.19 56.15a7.8 7.8 0 0 0 0 13.18l88.19 56.15a7.91 7.91 0 0 0 12.18-6.59V71.85a7.91 7.91 0 0 0-12.18-6.59");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y2xhkkbij {
  d: path("M223.77 58a16 16 0 0 0-16.25.53L128 109.14v-37.3a15.91 15.91 0 0 0-24.48-13.34l-88.19 56.16a15.8 15.8 0 0 0 0 26.68l88.19 56.16A15.91 15.91 0 0 0 128 184.16v-37.3l79.52 50.64A15.91 15.91 0 0 0 232 184.16V71.84A15.83 15.83 0 0 0 223.77 58M112 183.93L24.18 128L112 72.06Zm104 0L128.18 128L216 72.06Z");
}
</style><g class="cuyn6tgcc"><path class="f_dihdcpw"/><path class="y2xhkkbij"/></g>`,
		"fallback": "ph:rewind-duotone",
	});
}

export default Component;
