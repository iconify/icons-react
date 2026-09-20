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
		"content": `<style>.jjotvj33a {
  fill: currentColor;
  d: path("M12 16v-4h4v1.5h-2.5V16zm0 6v-4h1.5v2.5H16V22zm8.5-6v-2.5H18V12h4v4zM18 22v-1.5h2.5V18H22v4zm2.775-12H18.7q-.65-2.2-2.475-3.6T12 5Q9.075 5 7.037 7.038T5 12q0 1.8.813 3.3T8 17.75V15h2v6H4v-2h2.35Q4.8 17.75 3.9 15.938T3 12q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3q3.225 0 5.663 1.988T20.775 10");
}
</style><path class="jjotvj33a"/>`,
		"fallback": "material-symbols:reset-focus-sharp",
	});
}

export default Component;
