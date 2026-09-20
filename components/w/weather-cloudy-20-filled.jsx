import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lpyewhw7b {
  fill: currentColor;
  d: path("M11 7c2.465 0 3.863 1.574 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763S16.714 16 15.128 16H6.872C5.286 16 4 14.763 4 13.237s1.286-2.763 2.872-2.763h.062C7.139 8.561 8.535 7 11 7M8.392 4c1.456 0 2.726.828 3.353 2.045A6 6 0 0 0 11 6C8.61 6 6.868 7.307 6.246 9.286l-.062.214l-.046.187l-.165.03a3.73 3.73 0 0 0-2.716 2.258a2.622 2.622 0 0 1 1.2-4.856l.222-.005A3.77 3.77 0 0 1 8.392 4");
}
</style><path class="lpyewhw7b"/>`,
		"fallback": "fluent:weather-cloudy-20-filled",
	});
}

export default Component;
