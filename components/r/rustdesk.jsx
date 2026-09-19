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
		"content": `<style>.g64ayebsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.132 3.08a21.475 21.475 0 0 0 0 41.84m9.734.001a21.475 21.475 0 0 0 0-41.842");
}
</style><path class="g64ayebsh"/>`,
		"fallback": "arcticons:rustdesk",
	});
}

export default Component;
