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
		"content": `<style>.ea4bzuenk {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm0 0V6zm2.577-2.577h7.846v-1H6.577zm9.846 0h1v-1h-1zm-9.846-3.577h1v-1h-1zm3 0h7.846v-1H9.577z");
}
</style><path class="ea4bzuenk"/>`,
		"fallback": "material-symbols-light:subtitles-outline-sharp",
	});
}

export default Component;
