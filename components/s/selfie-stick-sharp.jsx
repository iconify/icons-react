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
		"content": `<style>.et1hlbcco {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.75 2.75h7v9.5h-7z");
}

.gz5_b-swj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.25 5.75h.01");
}

.p7w45pbnq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.25 12.25l-5 5m.53.53l-1.06-1.06l-.71-.71l-.71.71l-1.33 1.33l-.71.71l.71.71l1.06 1.06l.71.71l.71-.71l1.33-1.33l.71-.71z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="et1hlbcco"/><path class="gz5_b-swj"/><path class="p7w45pbnq"/></g>`,
		"fallback": "iconoven:selfie-stick-sharp",
	});
}

export default Component;
