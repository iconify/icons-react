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
		"content": `<style>.a4p4grc6g {
  fill: currentColor;
  d: path("M2.5 8.25h19V10h-19Z");
}

.ehwg0pb9q {
  d: path("M8.75 10v10.5m6.5-10.5v10.5");
}

.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="a4p4grc6g"/><path class="ehwg0pb9q"/></g>`,
		"fallback": "uix-sharp:table-freeze",
	});
}

export default Component;
