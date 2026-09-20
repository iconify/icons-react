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
		"content": `<style>.iqteh8y2k {
  fill: currentColor;
  d: path("M4 5V4h16v1zm0 15V7.385h16V20z");
}
</style><path class="iqteh8y2k"/>`,
		"fallback": "material-symbols-light:page-header-sharp",
	});
}

export default Component;
