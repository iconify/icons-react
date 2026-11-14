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
		"content": `<style>.drq1kjbes {
  d: path("m18.5 11.75l1.5-2m.5 4.25l1.5-1");
}

.h6j8knffq {
  d: path("M4 20c0-3.25 3.5-5.5 8-5.5s8 2.25 8 5.5c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1ZM8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_rfllh2q {
  fill: currentColor;
  d: path("m16.5 15.75l.478.845l.936-.259l-.259.936l.845.478l-.845.478l.259.936l-.936-.259l-.478.845l-.478-.845l-.936.259l.259-.936l-.845-.478l.845-.478l-.259-.936l.936.259Z");
}
</style><g class="ulnmmdpxh"><path class="h6j8knffq"/><path class="w_rfllh2q"/><path class="drq1kjbes"/></g>`,
		"fallback": "uix-sharp:shoulder-pain",
	});
}

export default Component;
