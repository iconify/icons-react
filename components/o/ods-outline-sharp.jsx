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
		"content": `<style>.ckif29evg {
  fill: currentColor;
  d: path("M5 15h4V9H5zm1.5-1.5v-3h1v3zM10 15h3.25l.75-.75v-4.5L13.25 9H10zm1.5-1.5v-3h1v3zM15 15h4v-3.65h-2.5v-.85H19V9h-4v3.6h2.5v.9H15zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="ckif29evg"/>`,
		"fallback": "material-symbols:ods-outline-sharp",
	});
}

export default Component;
