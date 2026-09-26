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
		"content": `<style>.jrcb3ubqp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 1L14 1C16.2091 1 18 2.7909 18 5L18 14C18 16.2091 16.2091 18 14 18L10 18C7.7909 18 6 16.2091 6 14L6 5C6 2.7909 7.7909 1 10 1ZM13.5 7C13.5 7.8284 12.8284 8.5 12 8.5C11.1716 8.5 10.5 7.8284 10.5 7C10.5 6.1716 11.1716 5.5 12 5.5C12.8284 5.5 13.5 6.1716 13.5 7ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xsn9nsanb {
  d: path("M7 5L5 5M17 5L19 5M7 10L5 10M17 10L19 10M12 17L12 22");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="jrcb3ubqp"/><path class="xsn9nsanb"/></g>`,
		"fallback": "keyline-icons:traffic-light-fill",
	});
}

export default Component;
