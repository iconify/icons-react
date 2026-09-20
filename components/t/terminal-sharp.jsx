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
		"content": `<style>.urd-khb9h {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V8H4zm3.5-1.711l-.689-.689L9.388 13l-2.6-2.6l.713-.688L10.789 13zm5 .211v-1h5v1z");
}
</style><path class="urd-khb9h"/>`,
		"fallback": "material-symbols-light:terminal-sharp",
	});
}

export default Component;
