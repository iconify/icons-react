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
		"content": `<style>.f67mqyb3f {
  fill: currentColor;
  d: path("M6 22V2h12v20zm6-1.961q.31 0 .54-.23t.23-.54t-.23-.54T12 18.5t-.54.23t-.23.54t.23.539t.54.23m-5-3.5h10V5.5H7z");
}
</style><path class="f67mqyb3f"/>`,
		"fallback": "material-symbols-light:phone-iphone-sharp",
	});
}

export default Component;
