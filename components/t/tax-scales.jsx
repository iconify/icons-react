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
		"content": `<style>.t_xl2cbry {
  d: path("M16.5 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.un5_dc36f {
  d: path("M12 3v17.5m-4.5 0h9M5.5 13V6.5h13V9M2 13h7a3.5 3.5 0 0 1-7 0Zm13 0h7a3.5 3.5 0 0 1-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="un5_dc36f"/><path class="t_xl2cbry"/></g>`,
		"fallback": "uix-sharp:tax-scales",
	});
}

export default Component;
