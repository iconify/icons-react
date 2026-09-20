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
		"content": `<style>.a3s-ix6ox {
  d: path("M12 9.5v6");
}

.du3agkbjb {
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fquh7rbnp {
  d: path("M15 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mo1bh2_2m {
  d: path("M9 12.5h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sqwju3bsh {
  d: path("M2 16V8.5h4L9.5 5h5L18 8.5h4V16Z");
}
</style><g class="nrj6p8qat"><path class="sqwju3bsh"/><path class="du3agkbjb"/><path class="fquh7rbnp"/><path class="a3s-ix6ox"/><path class="mo1bh2_2m"/></g>`,
		"fallback": "iconmind:roadside-assist-outline-regular",
	});
}

export default Component;
