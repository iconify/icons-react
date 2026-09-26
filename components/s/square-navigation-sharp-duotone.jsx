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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.iylvp5bht {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7.6056 19.0528L11.1056 12.0528C11.4741 11.3157 12.5259 11.3157 12.8944 12.0528L16.3944 19.0528C16.7726 19.8091 16.0997 20.6642 15.2757 20.4745L12 19.7206L8.7243 20.4745C7.9003 20.6642 7.2274 19.8091 7.6056 19.0528Z");
  stroke: none;
}

.j0mppdb_k {
  d: path("M19 21L21 21L21 3L3 3L3 21L5 21");
}
</style><g class="gp_8x1bzb"><path class="j0mppdb_k"/><path class="iylvp5bht"/></g>`,
		"fallback": "keyline-icons:square-navigation-sharp-duotone",
	});
}

export default Component;
