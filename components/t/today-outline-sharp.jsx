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
		"content": `<style>.ghrmtkbfr {
  fill: currentColor;
  d: path("M7.504 14.996q-.62-.619-.62-1.496t.62-1.496T9 11.384t1.496.62t.62 1.496t-.62 1.496t-1.496.62t-1.496-.62M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5zM5 9.615h14V6H5zm0 0V6z");
}
</style><path class="ghrmtkbfr"/>`,
		"fallback": "material-symbols-light:today-outline-sharp",
	});
}

export default Component;
