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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.j39x_ub7n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 3v9h9a9 9 0 0 1-9 9a9 9 0 0 1-9-9a9 9 0 0 1 9-9");
}

.v4ip5wjiw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 12a9 9 0 1 1-9-9m5 9a5 5 0 1 1-5-5m0 5l9-9m-4 0v4h4");
}
</style><g class="ft5dv1b6b"><path class="j39x_ub7n"/><path class="v4ip5wjiw"/></g>`,
		"fallback": "coolicons:target-arrow-duotone-sharp",
	});
}

export default Component;
