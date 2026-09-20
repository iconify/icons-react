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
		"content": `<style>.k94mwg__n {
  fill: currentColor;
  d: path("M11.5 20.308v-3.195l-5.692-2.41V11H11.5V8H8.808V3.615h6.384V8H12.5v3h5.692v3.704l-5.692 2.41v3.194zm0-4.293V12H6.808v2.037zm1 0l4.692-1.978V12H12.5z");
}
</style><path class="k94mwg__n"/>`,
		"fallback": "material-symbols-light:lda-sharp",
	});
}

export default Component;
