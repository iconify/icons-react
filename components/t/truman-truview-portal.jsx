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
		"content": `<style>.ewdxk1bye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.23 17.756l9.542 5.881V43.5H19.23zM41.064 6.41v8.619H10.466zM6.936 4.5h21.927L6.936 14.457z");
}
</style><path class="ewdxk1bye"/>`,
		"fallback": "arcticons:truman-truview-portal",
	});
}

export default Component;
