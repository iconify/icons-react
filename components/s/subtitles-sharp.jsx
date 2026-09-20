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
		"content": `<style>.raojjkbfc {
  fill: currentColor;
  d: path("M3 19V5h18v14zm3.577-3.577h7.846v-1H6.577zm9.846 0h1v-1h-1zm-9.846-3.577h1v-1h-1zm3 0h7.846v-1H9.577z");
}
</style><path class="raojjkbfc"/>`,
		"fallback": "material-symbols-light:subtitles-sharp",
	});
}

export default Component;
