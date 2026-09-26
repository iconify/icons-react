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

.md1698vtm {
  d: path("M22 4L9.1716 4L2 12L9.1716 20L22 20L22 4ZM10.9571 15.2929L17.5429 8.7071");
}

.qg4ud0b0f {
  fill: currentColor;
  d: path("M12.75 8.5C12.75 9.3284 12.0784 10 11.25 10C10.4216 10 9.75 9.3284 9.75 8.5C9.75 7.6716 10.4216 7 11.25 7C12.0784 7 12.75 7.6716 12.75 8.5ZM18.75 15.5C18.75 16.3284 18.0784 17 17.25 17C16.4216 17 15.75 16.3284 15.75 15.5C15.75 14.6716 16.4216 14 17.25 14C18.0784 14 18.75 14.6716 18.75 15.5Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="md1698vtm"/><path class="qg4ud0b0f"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start-percent-sharp",
	});
}

export default Component;
