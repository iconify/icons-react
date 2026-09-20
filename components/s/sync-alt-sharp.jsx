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
		"content": `<style>.ylcwp-bhb {
  fill: currentColor;
  d: path("M7.308 20.308L3 16l4.308-4.308l.713.708l-3.1 3.1H20v1H4.921l3.1 3.1zm9.384-8l-.713-.708l3.1-3.1H4v-1h15.079l-3.1-3.1l.713-.708L21 8z");
}
</style><path class="ylcwp-bhb"/>`,
		"fallback": "material-symbols-light:sync-alt-sharp",
	});
}

export default Component;
