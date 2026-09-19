import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f91o5jbbe {
  fill: currentColor;
  d: path("M42.363 28.662h-14.76a65 65 0 0 1-.258 4.4h15.019v-4.4zm-14.76-8.478h14.761v4.402H27.603z");
}

.r_vp-047q {
  fill: currentColor;
  d: path("M52 2H12C6.477 2 2 6.477 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10m-5 40.516c0 2.598-.625 3.824-2.318 4.547c-1.768.758-4.344.828-8.135.828c-.258-1.262-1.142-3.318-1.841-4.51c2.576.145 5.669.109 6.479.109c.883 0 1.179-.289 1.179-1.047v-5.23H26.607c-.956 4.039-2.797 7.973-6.221 10.787c-.662-.902-2.429-2.49-3.387-3.104c5.559-4.654 6.074-11.545 6.074-17.027V16H47z");
}
</style><path class="f91o5jbbe"/><path class="r_vp-047q"/>`,
		"fallback": "emojione-monotone:japanese-monthly-amount-button",
	});
}

export default Component;
