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
		"content": `<style>.n4-agze3v {
  fill: currentColor;
  d: path("M3 21v-6h2v6zm3-2v-2h6v-4H5.65l3-10h8.7l3 10H14v6z");
}
</style><path class="n4-agze3v"/>`,
		"fallback": "material-symbols:wall-lamp-sharp",
	});
}

export default Component;
