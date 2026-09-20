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
		"content": `<style>.coye-i88w {
  d: path("M8 8v8");
}

.i-58-pnpd {
  d: path("M16 8v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.thkmlu7qy {
  d: path("M3 8h18v8H3Z");
}
</style><g class="nrj6p8qat"><path class="thkmlu7qy"/><path class="coye-i88w"/><path class="i-58-pnpd"/></g>`,
		"fallback": "iconmind:magnet-outline-regular",
	});
}

export default Component;
