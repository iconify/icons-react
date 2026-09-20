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
		"content": `<style>.jyikixfvw {
  fill: currentColor;
  d: path("M2 20V4h20v7h-2V6H4v12h11v2Zm9.075-5.5l1.425-1.425L9.4 10H12V8H6v6h2v-2.575ZM17 20v-7h5v7Zm-5-8Z");
}
</style><path class="jyikixfvw"/>`,
		"fallback": "material-symbols:unfloat-landscape-outline-sharp",
	});
}

export default Component;
