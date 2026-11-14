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
		"content": `<style>.ley96e8ru {
  d: path("M9.5 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.s1mp3z1kv {
  d: path("M12 16.5c0-4.5-6-5-6-13m6 13c0-4.5 6-5 6-13");
}

.t2f0tsimh {
  d: path("M3.5 6L6 3.5L8.5 6m7 0L18 3.5L20.5 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ley96e8ru"/><path class="s1mp3z1kv"/><path class="t2f0tsimh"/></g>`,
		"fallback": "uix-sharp:route-compare",
	});
}

export default Component;
