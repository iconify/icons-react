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
		"content": `<style>.rtnyc2-wv {
  fill: currentColor;
  d: path("M2.5 19.5v-1h19v1zM6.116 15q.346-2.175 2.008-3.588T12 10t3.876 1.413T17.884 15z");
}
</style><path class="rtnyc2-wv"/>`,
		"fallback": "material-symbols-light:wb-twilight-2-sharp",
	});
}

export default Component;
