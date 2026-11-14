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
		"content": `<style>.mg8xcb83g {
  d: path("M18.25 21.75c-2-2-3.25-3.75-3.25-5.5a3.25 3.25 0 0 1 6.5 0c0 1.75-1.25 3.5-3.25 5.5Z");
}

.oj2a36egk {
  d: path("M13.177 19.67L8.5 18l-6 2.5V6l6-2.5l7 2.5l6-2.5v7.667M8.5 3.5V18m7-12v4.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xgddzl_tz {
  d: path("M17.25 16.25a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><g class="ulnmmdpxh"><path class="oj2a36egk"/><path class="mg8xcb83g"/><path class="xgddzl_tz"/></g>`,
		"fallback": "uix-sharp:local-seo",
	});
}

export default Component;
