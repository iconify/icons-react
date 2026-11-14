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
		"content": `<style>.f95sagb6a {
  d: path("M7.75 8.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q73g-z-mt {
  d: path("M3 12.5h18L19.5 20a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 20Z");
}

.xynx0g50q {
  d: path("M13 7c0-.42-.43-.62-1-.5c-.7-.12-1.12.22-1 .75c-.12 1.05 2.12.6 2 2c.12.5-.35.87-1 .75c-.6.12-1.03-.12-1-.5m1-3.75v.75m0 3.5v.75m-8.25.5a2 .75 0 1 0 4 0a2 .75 0 1 0-4 0m12.5 0a2 .75 0 1 0 4 0a2 .75 0 1 0-4 0m-7.75 4l.25 3.5m3.25-3.5v3.5m3.5-3.5l-.25 3.5");
}
</style><g class="hntgybcog"><path class="q73g-z-mt"/><path class="f95sagb6a"/><path class="xynx0g50q"/></g>`,
		"fallback": "uix:treasury-money-market-fund",
	});
}

export default Component;
