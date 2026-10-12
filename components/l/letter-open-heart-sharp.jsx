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
		"content": `<style>.cvvrcd7vi {
  d: path("m3.5 6.5l7.3 5.7l1.2.9l1.2-.9l7.3-5.7");
}

.hmz588b6d {
  d: path("M2.75 5.25h18.5v13.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xfase5boe {
  d: path("M12 16.85c-1.58-1.16-2.63-2.1-2.63-3.26v-1.37h2.183l.437.79l.437-.79h2.183v1.37c0 1.16-1.05 2.1-2.63 3.26Z");
}
</style><g class="x2cwu0gfd"><path class="hmz588b6d"/><path class="cvvrcd7vi"/><path class="xfase5boe"/></g>`,
		"fallback": "iconoven:letter-open-heart-sharp",
	});
}

export default Component;
