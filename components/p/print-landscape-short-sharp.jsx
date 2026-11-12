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
		"content": `<style>.lzrbbabmc {
  fill: currentColor;
  d: path("m4 19l-1-1v-1H2v-3h1V9.975H2v-3h1v-2.05Q6.35 4.75 9.538 3.9t6.237-2.225L17 2.45v12.4q-2.975 1.775-6.25 2.85T4 19m9.125 0q1.475-.65 2.938-1.35T19 16.125V4.975h2V19z");
}
</style><path class="lzrbbabmc"/>`,
		"fallback": "material-symbols:print-landscape-short-sharp",
	});
}

export default Component;
