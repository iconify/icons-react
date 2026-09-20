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
		"content": `<style>.xsqch3-ad {
  fill: currentColor;
  d: path("M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75m-6 1.5a.75.75 0 0 1 .743.648l.007.102V12h3.748a.75.75 0 0 1 .102 1.493l-.102.007H11.75a.75.75 0 0 1-.743-.648L11 12.75v-6a.75.75 0 0 1 .75-.75");
}
</style><path class="xsqch3-ad"/>`,
		"fallback": "fluent:shifts-24-regular",
	});
}

export default Component;
