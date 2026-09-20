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
		"content": `<style>.m19zh486k {
  fill: currentColor;
  d: path("M3 19.5q-.213 0-.357-.143T2.5 19t.143-.357T3 18.5h18q.214 0 .357.143T21.5 19t-.143.357T21 19.5zM7.425 14h9.15q-.575-1.35-1.81-2.175Q13.532 11 12 11t-2.766.825T7.426 14m-1.31 1q.347-2.175 2.009-3.588T12 10t3.876 1.413T17.884 15zM12 14");
}
</style><path class="m19zh486k"/>`,
		"fallback": "material-symbols-light:wb-twilight-2-outline-rounded",
	});
}

export default Component;
