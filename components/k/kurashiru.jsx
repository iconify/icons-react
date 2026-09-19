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
		"content": `<style>.u48we4muv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5zM24 24a18.5 18.5 0 0 0 18.5 18.5V24zM42.5 5.5C42.5 15.717 34.217 24 24 24c0-10.217 8.283-18.5 18.5-18.5");
}
</style><path class="u48we4muv"/>`,
		"fallback": "arcticons:kurashiru",
	});
}

export default Component;
