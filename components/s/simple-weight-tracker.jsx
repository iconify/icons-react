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
		"content": `<style>.fzjuq7b0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.843 5.723c6.894-2.065 18.022 10.709 20.56 17.265c0 0 5.53 12.343 13.97 13.469l.071 5.731s-8.091 4.33-21.563-19.27c-2.83-5.513-8.087-11.155-13.325-11.105z");
}
</style><path class="fzjuq7b0a"/>`,
		"fallback": "arcticons:simple-weight-tracker",
	});
}

export default Component;
