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
		"content": `<style>.emcfyqbrb {
  d: path("M15.5 21.25h5.75v-.75c0-2.1-1.5-3.75-3.25-3.75s-3.25 1.65-3.25 3.75v.75z");
}

.n_3shnbyh {
  d: path("M12 3v10m0-10h6.25l-1.5 2l1.5 2H12Z");
}

.o3zsgvdcg {
  cx: 18px;
  cy: 13px;
  r: 2.25px;
}

.ur7ziob_p {
  d: path("M3.5 21.25h5.75v-.75c0-2.1-1.5-3.75-3.25-3.75S2.75 18.4 2.75 20.5v.75z");
}

.w9x3n1bkv {
  cx: 6px;
  cy: 13px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="n_3shnbyh"/><circle class="w9x3n1bkv"/><path class="ur7ziob_p"/><circle class="o3zsgvdcg"/><path class="emcfyqbrb"/></g>`,
		"fallback": "iconoven:team-goal-sharp",
	});
}

export default Component;
