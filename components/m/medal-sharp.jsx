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
		"content": `<style>.bds_koqxg {
  d: path("m6.75 2.75l3.5 7m7-7l-3.5 7");
}

.ph-yqxlcq {
  d: path("m12.16 13.37l.42 1l.15.37l.4.03l1.09.1l.4.03l-.31.26l-.82.71l-.3.27l.09.39l.25 1.06l.09.38l-.35-.2l-.93-.56L12 17l-.34.21l-.93.56l-.35.2l.09-.38l.25-1.06l.09-.39l-.3-.27l-.82-.71l-.31-.26l.4-.03l1.09-.1l.4-.03l.15-.37l.42-1L12 13z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydy0opbpr {
  cx: 12px;
  cy: 15.5px;
  r: 5.75px;
}
</style><g class="x2cwu0gfd"><path class="bds_koqxg"/><circle class="ydy0opbpr"/><path class="ph-yqxlcq"/></g>`,
		"fallback": "iconoven:medal-sharp",
	});
}

export default Component;
