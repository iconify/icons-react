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
		"content": `<style>.c82xd1btj {
  fill: currentColor;
  d: path("M4.19 19.81v-.708L19.103 4.19h.714v.708L4.898 19.81zM4 13.526v-1.415L12.111 4h1.416zm0-7.18V4h2.346zM17.654 20L20 17.654V20zm-7.181 0L20 10.473v1.416L11.889 20z");
}
</style><path class="c82xd1btj"/>`,
		"fallback": "material-symbols-light:texture-outline-sharp",
	});
}

export default Component;
