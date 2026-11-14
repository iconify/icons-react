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
		"content": `<style>.p9_bc8bri {
  d: path("M2.5 2.5h19v19h-19Zm9.5 0v19M2.5 12h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xciiyzblg {
  d: path("M12 2.5L16.75 7l4.75-4.5");
}
</style><g class="ulnmmdpxh"><path class="p9_bc8bri"/><path class="xciiyzblg"/></g>`,
		"fallback": "uix-sharp:mailroom",
	});
}

export default Component;
