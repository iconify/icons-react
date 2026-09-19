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
		"content": `<style>.xi4ilibvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.534 16.736h24.932M11.534 24h18.504m-18.504 7.265h24.932M10.043 9.017H7.231A2.73 2.73 0 0 0 4.5 11.748v24.504a2.73 2.73 0 0 0 2.731 2.731h2.812M37.957 9.017h2.812a2.73 2.73 0 0 1 2.731 2.731v24.504a2.73 2.73 0 0 1-2.731 2.731h-2.812");
}
</style><path class="xi4ilibvg"/>`,
		"fallback": "arcticons:newsreader",
	});
}

export default Component;
