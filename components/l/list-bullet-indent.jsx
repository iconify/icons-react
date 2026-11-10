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
		"content": `<style>.lc70ckpwz {
  d: path("M12 19H21M10 12H19M8 5H17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ra64xj7dj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 5C5 5.83 4.3284 6.5 3.5 6.5C2.6716 6.5 2 5.83 2 5C2 4.17 2.6716 3.5 3.5 3.5C4.3284 3.5 5 4.17 5 5ZM7 12C7 12.83 6.3284 13.5 5.5 13.5C4.6716 13.5 4 12.83 4 12C4 11.17 4.6716 10.5 5.5 10.5C6.3284 10.5 7 11.17 7 12ZM9 19C9 19.83 8.3284 20.5 7.5 20.5C6.6716 20.5 6 19.83 6 19C6 18.17 6.6716 17.5 7.5 17.5C8.3284 17.5 9 18.17 9 19Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="ra64xj7dj"/><path class="lc70ckpwz"/></g>`,
		"fallback": "keyline-icons:list-bullet-indent",
	});
}

export default Component;
