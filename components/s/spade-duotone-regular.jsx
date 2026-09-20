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
		"content": `<style>.b58isb55w {
  d: path("M12 6v7");
}

.fsijhq84z {
  fill: currentColor;
  d: path("M8 13h8v4l-4 4 -4 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vrecxx6kh {
  d: path("M9 6h6");
}

.xzm42kydi {
  d: path("M8 13h8v4l-4 4 -4 -4Z");
}
</style><g class="nrj6p8qat"><path class="fsijhq84z"/><path class="xzm42kydi"/><path class="b58isb55w"/><path class="vrecxx6kh"/></g>`,
		"fallback": "iconmind:spade-duotone-regular",
	});
}

export default Component;
