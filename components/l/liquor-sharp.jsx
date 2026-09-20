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
		"content": `<style>.qu7rkbwtl {
  fill: currentColor;
  d: path("M4 21v-1h1.673v-3.488q-.798-.185-1.235-.755T4 14.423V7.5h4.346v6.923q0 .725-.447 1.315q-.447.589-1.226.774V20h1.673v1zm1-9.058h2.346V8.5H5zM11.923 21V9.646l3.039-1.177V3h3v5.47L21 9.626V21zm4.039-15.904h1V4h-1zm-3.039 7.5H20v-2.28l-3.039-1.158V6.096h-1v3.062l-3.038 1.158zm0 7.404H20v-2.692h-7.077z");
}
</style><path class="qu7rkbwtl"/>`,
		"fallback": "material-symbols-light:liquor-sharp",
	});
}

export default Component;
