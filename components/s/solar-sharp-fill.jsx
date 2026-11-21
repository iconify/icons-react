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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.k_pke59ov {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.1056 13.5528C5.275 13.214 5.6212 13 6 13L18 13C18.3788 13 18.725 13.214 18.8944 13.5528L22.8944 21.5528C22.9639 21.6916 23 21.8448 23 22C23 22.5523 22.5523 23 22 23L2 23C1.4477 23 1 22.5523 1 22C1 21.8448 1.0361 21.6916 1.1056 21.5528ZM8.8195 15L8.4862 17L5.618 17L4.618 19L8.1529 19L7.8196 21L9.8472 21L10.1805 19L13.8195 19L14.1528 21L16.1804 21L15.8471 19L19.382 19L18.382 17L15.5138 17L15.1805 15L13.1529 15L13.4862 17L10.5138 17L10.8471 15Z");
  stroke: none;
}

.zbcvugujr {
  d: path("M7.6933 10.5556L7.9689 10C8.7286 8.4686 10.2905 7.5 12 7.5C13.7095 7.5 15.2714 8.4686 16.0311 10L16.3067 10.5556M12 4.5L12 1M17.7175 6.2825L19.364 4.636M6.2825 6.2825L4.636 4.636M4.4689 10L1.4689 10M19.5311 10L22.5311 10");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="k_pke59ov"/><path class="zbcvugujr"/></g>`,
		"fallback": "keyline-icons:solar-sharp-fill",
	});
}

export default Component;
