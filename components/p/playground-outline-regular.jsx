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
		"content": `<style>.jgpu15buw {
  d: path("M3 4.5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v15a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.ut56jqb8q {
  d: path("m12 10.5 4 4 -4 4 -4 -4Z");
}
</style><g class="nrj6p8qat"><path class="jgpu15buw"/><path class="ozi-k-boi"/><path class="ut56jqb8q"/></g>`,
		"fallback": "iconmind:playground-outline-regular",
	});
}

export default Component;
