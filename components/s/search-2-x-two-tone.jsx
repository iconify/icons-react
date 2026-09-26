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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pb72njblp {
  d: path("M19 11C19 15.4183 15.4183 19 11 19C6.5817 19 3 15.4183 3 11C3 6.5817 6.5817 3 11 3C15.4183 3 19 6.5817 19 11ZM17 17L21 21M8.8787 8.8787L13.1213 13.1213M13.1213 8.8787L8.8787 13.1213");
}

.zu7ckv_si {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 11C20 15.9706 15.9706 20 11 20C6.0294 20 2 15.9706 2 11C2 6.0294 6.0294 2 11 2C15.9706 2 20 6.0294 20 11Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zu7ckv_si"/><path class="pb72njblp"/></g>`,
		"fallback": "keyline-icons:search-2-x-two-tone",
	});
}

export default Component;
