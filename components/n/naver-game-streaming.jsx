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
		"content": `<style>.q3m8phb7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.2 5.5h13.71l-3.432 5.386H42.5L26.744 32.407h13.7V42.5H5.5l16.444-22.2h-13.7z");
}
</style><path class="q3m8phb7e"/>`,
		"fallback": "arcticons:naver-game-streaming",
	});
}

export default Component;
