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
		"content": `<style>.wysfd55hw {
  fill: currentColor;
  d: path("M3.77 20V10h4.153v10zm5.96 0V4h4.54v16zm6.347 0v-8h4.154v8z");
}
</style><path class="wysfd55hw"/>`,
		"fallback": "material-symbols-light:leaderboard-sharp",
	});
}

export default Component;
