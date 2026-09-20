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
		"content": `<style>.d5ewpzb2a {
  d: path("M12 20c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}

.fzx2-xbbx {
  fill: currentColor;
  d: path("M12 20c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sg5tbcboo {
  fill: currentColor;
  d: path("M4 11c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vi0rmgvkt {
  d: path("M4 11c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}
</style><g class="hntgybcog"><path class="sg5tbcboo"/><path class="fzx2-xbbx"/><path class="vi0rmgvkt"/><path class="d5ewpzb2a"/></g>`,
		"fallback": "iconmind:leaf-fall-duotone-thin",
	});
}

export default Component;
