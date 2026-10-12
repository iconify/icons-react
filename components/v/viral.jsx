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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ps220_buj {
  d: path("m12.65 3.26l.64.74q.65.76 1.6.43l.92-.33q.94-.33 1.13.66l.18.95q.18.99 1.17 1.17l.95.18q.99.19.66 1.13l-.33.92q-.33.95.43 1.6l.74.64q.76.65 0 1.3l-.74.64q-.76.65-.43 1.6l.33.92q.33.94-.66 1.13l-.95.18q-.99.18-1.17 1.17l-.18.95q-.19.99-1.13.66l-.92-.33q-.95-.33-1.6.43l-.64.74q-.65.76-1.3 0l-.64-.74q-.65-.76-1.6-.43l-.92.33q-.94.33-1.13-.66l-.18-.95q-.18-.99-1.17-1.17l-.95-.18q-.99-.19-.66-1.13l.33-.92q.33-.95-.43-1.6l-.74-.64q-.76-.65 0-1.3l.74-.64q.76-.65.43-1.6l-.33-.92q-.33-.94.66-1.13l.95-.18q.99-.18 1.17-1.17l.18-.95q.19-.99 1.13-.66l.92.33q.95.33 1.6-.43l.64-.74q.65-.76 1.3 0");
}

.y4mqir5uc {
  d: path("m9.25 14.75l5.5-5.5m-4.5 0h4.5v4.5");
}
</style><g class="hntgybcog"><path class="ps220_buj"/><path class="y4mqir5uc"/></g>`,
		"fallback": "iconoven:viral",
	});
}

export default Component;
