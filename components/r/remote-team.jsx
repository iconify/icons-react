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
		"content": `<style>.qftxlyb-f {
  d: path("M2.5 3h19v14h-19ZM12 17v3.5m-4 0h8M12 3v14m-9.5-7h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uptsgr6nl {
  d: path("M6 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm9.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-9.5 7a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm9.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="qftxlyb-f"/><path class="uptsgr6nl"/></g>`,
		"fallback": "uix-sharp:remote-team",
	});
}

export default Component;
