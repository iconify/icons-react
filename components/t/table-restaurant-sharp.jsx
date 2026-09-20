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
		"content": `<style>.gf_r5bbni {
  fill: currentColor;
  d: path("M17.012 10.192H6.994l-.352 2.731h10.735zM4.827 19.02l1.187-8.827H2.77l1.56-5.385h15.36l1.576 5.384h-3.275l1.181 8.827h-.98l-.695-5.096H6.502l-.694 5.096z");
}
</style><path class="gf_r5bbni"/>`,
		"fallback": "material-symbols-light:table-restaurant-sharp",
	});
}

export default Component;
