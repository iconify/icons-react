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
		"content": `<style>.jwmze0bgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.46 11.54l-5.85-5.9a3.9 3.9 0 0 0-2.76-1.14h-19.5a2 2 0 0 0-1.95 2v35.1a2 2 0 0 0 1.95 2h27.3a2 2 0 0 0 2-2V14.3a3.9 3.9 0 0 0-1.19-2.76m-25.08 3.15H29.7m-16.32 7.03h21.24m-21.24 7.03h19.5m-19.5 7.03h12.68");
}
</style><path class="jwmze0bgm"/>`,
		"fallback": "arcticons:omninotes",
	});
}

export default Component;
