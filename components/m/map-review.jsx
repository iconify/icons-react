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
		"content": `<style>.aeui5abjf {
  d: path("m17.75 14l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.eaf87q4kt {
  d: path("M12.969 19.654L9 18l-6 2.5V6l6-2.5L15 6l6-2.5v10.1M9 3.5v10.9m0 .6v3m6-12v7.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eaf87q4kt"/><path class="aeui5abjf"/></g>`,
		"fallback": "uix-sharp:map-review",
	});
}

export default Component;
