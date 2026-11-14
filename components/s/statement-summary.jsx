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
		"content": `<style>.cs-2pvkww {
  d: path("M8.5 3h7v4.5h-7ZM8 14a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ziql97jnu {
  d: path("M12 10v4h4");
}
</style><g class="ulnmmdpxh"><path class="re3nbbcdl"/><path class="cs-2pvkww"/><path class="ziql97jnu"/></g>`,
		"fallback": "uix-sharp:statement-summary",
	});
}

export default Component;
