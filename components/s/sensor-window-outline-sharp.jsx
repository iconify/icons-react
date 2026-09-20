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
		"content": `<style>.b5-3lngyq {
  fill: currentColor;
  d: path("M5 20.98V3.02h14v17.96zm1-9.48h4.5v-.77h3v.77H18V4.02H6zm0 1v7.48h12V12.5zm0 7.48h12z");
}
</style><path class="b5-3lngyq"/>`,
		"fallback": "material-symbols-light:sensor-window-outline-sharp",
	});
}

export default Component;
