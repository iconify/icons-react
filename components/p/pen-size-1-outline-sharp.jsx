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
		"content": `<style>.ex1p8jb2q {
  fill: currentColor;
  d: path("M5.187 18.814q-.13-.13-.13-.31t.13-.317l13-13q.136-.13.317-.13t.31.13q.128.129.128.31t-.128.317l-13 13q-.136.128-.317.128t-.31-.128");
}
</style><path class="ex1p8jb2q"/>`,
		"fallback": "material-symbols-light:pen-size-1-outline-sharp",
	});
}

export default Component;
