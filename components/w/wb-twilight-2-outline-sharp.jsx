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
		"content": `<style>.n3-y2jb5j {
  fill: currentColor;
  d: path("M2.5 19.5v-1h19v1zM7.425 14h9.15q-.575-1.35-1.81-2.175Q13.532 11 12 11t-2.765.825Q8 12.65 7.425 14m-1.31 1q.347-2.175 2.009-3.588T12 10t3.876 1.413T17.884 15zM12 14");
}
</style><path class="n3-y2jb5j"/>`,
		"fallback": "material-symbols-light:wb-twilight-2-outline-sharp",
	});
}

export default Component;
