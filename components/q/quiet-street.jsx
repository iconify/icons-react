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
		"content": `<style>.r6150yekz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 21L10 3m7.309 8.824L14 3m-2 2.5v2m0 3v3m0 6.4V21m2.875-5h.299a1.5 1.5 0 0 0 1.004-.385l.822-.74a.749.749 0 0 1 1.25.557v3.636a.749.749 0 0 1-1.25.557l-.822-.74a1.5 1.5 0 0 0-1.004-.385h-.299a.875.875 0 0 1-.875-.875v-.75a.875.875 0 0 1 .875-.875m4.625.25l2.25 2.25m0-2.25L19.5 18.5");
}
</style><path class="r6150yekz"/>`,
		"fallback": "uix:quiet-street",
	});
}

export default Component;
