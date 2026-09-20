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
		"content": `<style>.fw94w2bar {
  fill: currentColor;
  d: path("M9.5 14.808V11h3.692V9.692L15 11.5l-1.808 1.808V12H10.5v2.808zM6 22V2h12v20zm1-2.5V21h10v-1.5zm0-1h10v-13H7zm0-14h10V3H7zm0 0V3zm0 15V21z");
}
</style><path class="fw94w2bar"/>`,
		"fallback": "material-symbols-light:mobile-screen-share-outline-sharp",
	});
}

export default Component;
