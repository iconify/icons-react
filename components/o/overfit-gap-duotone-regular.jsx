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
		"content": `<style>.a7a9ymcaq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 19 5 -5h4l4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.a9q1iwbbu {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 14 5 -5h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.id4vqxf8c {
  d: path("m4 14 5 -5h11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qlw91sbif {
  d: path("m4 19 5 -5h4l4 4");
}
</style><g class="nrj6p8qat"><path class="a9q1iwbbu"/><path class="a7a9ymcaq"/><path class="id4vqxf8c"/><path class="qlw91sbif"/></g>`,
		"fallback": "iconmind:overfit-gap-duotone-regular",
	});
}

export default Component;
