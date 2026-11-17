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
		"content": `<style>.nwt6jtb_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7.5V3m2.536 7.536L19.794 7.5M12 14v7m-1.268-8.268L4.206 16.5m3.062-7.232L4.206 7.5M12 7.5l-2-2m2 2l2-2m1.897 4.25l.732-2.732m-.732 2.732l2.732.732M12 16.5l2 2m-2-2l-2 2m-1.897-4.25l-.732 2.732m.732-2.732l-2.732-.732m2.454-3.693l-2.454.657M2 4l18 18");
}
</style><path class="nwt6jtb_s"/>`,
		"fallback": "coolicons:snowflake-off-duotone-round",
	});
}

export default Component;
