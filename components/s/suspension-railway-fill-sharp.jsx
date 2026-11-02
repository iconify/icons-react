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
		"content": `<style>.lex4ujd7l {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 0 2h-5v3h1c.265 0 .52.105.707.293l4 4A1 1 0 0 1 22 13v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V5H3a1 1 0 0 1 0-2Zm-7 2H8v3h6ZM4 10v5h6v-5Zm8 5h8v-1.586L16.586 10H12Z");
}
</style><path class="lex4ujd7l"/>`,
		"fallback": "coolicons:suspension-railway-fill-sharp",
	});
}

export default Component;
