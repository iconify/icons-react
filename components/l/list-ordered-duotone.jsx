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
		"content": `<style>.h4y-wyiui {
  d: path("M3.5 4.5L5 3L5 8M3 8H7M3 16.3C3 15.5 3.84 15 4.89 15C6.05 15 7 15.7 7 16.7C7 18.6 3 19.9 3 21H7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yo3sfnbjo {
  stroke-opacity: 0.4;
  d: path("M11 5H21M11 12H21M11 19H21");
}
</style><g class="nrj6p8qat"><path class="yo3sfnbjo"/><path class="h4y-wyiui"/></g>`,
		"fallback": "keyline-icons:list-ordered-duotone",
	});
}

export default Component;
