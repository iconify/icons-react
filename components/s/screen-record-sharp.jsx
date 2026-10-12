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
		"content": `<style>.aehem7bjh {
  cx: 12px;
  cy: 10.25px;
  r: 2.75px;
}

.guhbvob-p {
  d: path("M12 16.75v3.5m-3.75 0h7.5");
}

.s77rrwb7q {
  d: path("M2.75 3.75h18.5v13H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="s77rrwb7q"/><circle class="aehem7bjh"/><path class="guhbvob-p"/></g>`,
		"fallback": "iconoven:screen-record-sharp",
	});
}

export default Component;
