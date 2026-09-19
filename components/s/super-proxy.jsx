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
		"content": `<style>.zlq_b0bhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.87 14.64H16.066V9.698L5.5 19.548l10.567 9.614v-4.79h15.225v-5.23L42.5 28.79l-11.208 9.512v-4.84H21.266");
}
</style><path class="zlq_b0bhd"/>`,
		"fallback": "arcticons:super-proxy",
	});
}

export default Component;
