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
		"content": `<style>.djendxb_n {
  d: path("M12 9.75A4.25 4.25 0 1 0 16.25 14");
}

.pn1vbwbte {
  d: path("M4.25 2.75h15.5v18.5H4.25zm4.25 3.5h7");
}

.s_i5fqbbk {
  d: path("M12.75 13.25v-3.5h3.5v3.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pn1vbwbte"/><path class="djendxb_n"/><path class="s_i5fqbbk"/></g>`,
		"fallback": "iconoven:quarterly-report-sharp",
	});
}

export default Component;
