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
		"content": `<style>.itk4jibwr {
  fill: currentColor;
  d: path("M2 22V9h4V2h16v13h-4v7zm2-2h12v-7H4zm14-7h2V6H8v3h10z");
}
</style><path class="itk4jibwr"/>`,
		"fallback": "material-symbols:select-window-sharp",
	});
}

export default Component;
