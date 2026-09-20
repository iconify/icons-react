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
		"content": `<style>.sig0k-bdd {
  fill: currentColor;
  d: path("M5.5 18.27v-.5h13v.5zm0-2.5v-1h13v1zm0-3v-1.462h13v1.461zm0-3.5V5.73h13v3.54z");
}
</style><path class="sig0k-bdd"/>`,
		"fallback": "material-symbols-light:line-weight-sharp",
	});
}

export default Component;
