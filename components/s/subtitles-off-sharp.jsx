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
		"content": `<style>.c8p901b3q {
  fill: currentColor;
  d: path("M17.423 10.846h-3.92L7.659 5H21v13.342l-6.496-6.496h2.919zm1.935 10.12L17.38 19H3V5h1.616v1.242L2.38 3.99l.708-.708l16.977 16.977zm-12.781-9.12h1v-.815l-.185-.185h-.815zm6.227 2.577H6.577v1h7.227z");
}
</style><path class="c8p901b3q"/>`,
		"fallback": "material-symbols-light:subtitles-off-sharp",
	});
}

export default Component;
