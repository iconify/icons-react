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
		"content": `<style>.iezljm-7a {
  fill: currentColor;
  d: path("M12 3a6.5 6.5 0 1 0 6.5 9.5A5.5 5.5 0 0 1 12 3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xyj-l9cjp {
  d: path("M3 18h18");
}

.y-a5g9b6x {
  d: path("M12 3a6.5 6.5 0 1 0 6.5 9.5A5.5 5.5 0 0 1 12 3");
}
</style><g class="nrj6p8qat"><path class="iezljm-7a"/><path class="xyj-l9cjp"/><path class="y-a5g9b6x"/></g>`,
		"fallback": "iconmind:market-closed-duotone-regular",
	});
}

export default Component;
