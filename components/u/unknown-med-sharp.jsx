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
		"content": `<style>.riyerkbte {
  fill: currentColor;
  d: path("M3 12.5v-2h8v2zm9.98 0v-2h8v2z");
}
</style><path class="riyerkbte"/>`,
		"fallback": "material-symbols-light:unknown-med-sharp",
	});
}

export default Component;
