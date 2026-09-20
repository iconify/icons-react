import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ozoff8bfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.1 6.33a2.56 2.56 0 0 0-2.57 2.56v7.66h-9L8.8 24v15.1a2.56 2.56 0 0 0 2.56 2.58h20.09A2.58 2.58 0 0 0 34 39.11v-7.66h2.6a2.55 2.55 0 0 0 2.57-2.56V13.77l4.3-7.44zM34 31.45V19.12a2.57 2.57 0 0 0-2.56-2.57H13.53m5.39 5.02v15.08m5.02-15.08v15.08m5.03-10.05H13.89m15.08 5.02H13.89");
}
</style><path class="ozoff8bfy"/>`,
		"fallback": "arcticons:revolution",
	});
}

export default Component;
