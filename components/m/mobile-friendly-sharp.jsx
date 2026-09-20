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
		"content": `<style>.gybhqy77l {
  fill: currentColor;
  d: path("M5 22V2h12v4.923h-1V5.5H6v13h10v-1.423h1V22zm9.95-6.692l-3.558-3.558l.708-.708l2.85 2.85l5.689-5.688l.707.707z");
}
</style><path class="gybhqy77l"/>`,
		"fallback": "material-symbols-light:mobile-friendly-sharp",
	});
}

export default Component;
