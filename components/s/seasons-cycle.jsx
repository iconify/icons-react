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
		"content": `<style>.fj87c9bsl {
  d: path("M12 4.5a8 8 0 1 0 7 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zziqnog_c {
  d: path("m10 2.5l2 2l-2 2m-1 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="fj87c9bsl"/><path class="zziqnog_c"/></g>`,
		"fallback": "uix-sharp:seasons-cycle",
	});
}

export default Component;
