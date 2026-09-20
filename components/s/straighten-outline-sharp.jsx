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
		"content": `<style>.mmtsv_v6a {
  fill: currentColor;
  d: path("M3 17V7h18v10zm1-1h16V8h-3.5v3.23h-1V8h-3v3.23h-1V8h-3v3.23h-1V8H4zm3.5-4.77h1zm4 0h1zm4 0h1zM12 12");
}
</style><path class="mmtsv_v6a"/>`,
		"fallback": "material-symbols-light:straighten-outline-sharp",
	});
}

export default Component;
