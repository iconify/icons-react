import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fr7kqyb2j {
  fill: currentColor;
  d: path("M7.308 18.98L3 14.674l4.308-4.307l.708.713l-3.095 3.094h7.387v1H4.92l3.095 3.094zm9.384-5.365l-.707-.713l3.094-3.094h-7.387v-1h7.387l-3.094-3.094l.707-.714L21 9.308z");
}
</style><path class="fr7kqyb2j"/>`,
		"fallback": "material-symbols-light:swap-horiz-outline-sharp",
	});
}

export default Component;
