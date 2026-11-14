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
		"content": `<style>.c-wej_gio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6c-2-1.5-5-2-9.5-1.5v14C7 18 10 18.5 12 20c2-1.5 5-2 9.5-1.5v-14C17 4 14 4.5 12 6m0 0v14M5.5 8.5h4m-4 3h4m-4 3h4m5-6h4m-4 3h4");
}
</style><path class="c-wej_gio"/>`,
		"fallback": "uix:statement-passbook",
	});
}

export default Component;
