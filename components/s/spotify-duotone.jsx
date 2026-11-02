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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.n1q-pabfc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.2 8.426A13 13 0 0 1 17 9.742m-9.5 1.719a10 10 0 0 1 8.5 1.187m-8 1.814a7 7 0 0 1 7 1.176M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0");
}

.w0lv7f-we {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2.786 8.107C4.936 3.02 10.804.639 15.892 2.788s7.469 8.016 5.32 13.104s-8.016 7.469-13.104 5.32S.637 13.195 2.786 8.107");
}
</style><g class="ft5dv1b6b"><path class="w0lv7f-we"/><path class="n1q-pabfc"/></g>`,
		"fallback": "coolicons:spotify-duotone",
	});
}

export default Component;
