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
		"content": `<style>.nbhxjjbfa {
  d: path("M6 21C3 18 3 6 6 3c3 3 3 15 0 18");
}

.ndkxcpb5b {
  d: path("M12 16h5v3h-5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qaqzxor9c {
  d: path("M12 6h5v3h-5Z");
}
</style><g class="nrj6p8qat"><path class="nbhxjjbfa"/><path class="ndkxcpb5b"/><path class="qaqzxor9c"/></g>`,
		"fallback": "iconmind:snowboard-outline-regular",
	});
}

export default Component;
