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
		"content": `<style>.dvb3qmawu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.915 13.688L24 4.5l16.085 9.188m-5.873 7.686L24 16.264l-11.915 6.813v13.618L24 43.5l10.212-5.11");
}
</style><path class="dvb3qmawu"/>`,
		"fallback": "arcticons:truecoach",
	});
}

export default Component;
