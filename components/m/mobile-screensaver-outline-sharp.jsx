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
		"content": `<style>.gnv018bot {
  fill: currentColor;
  d: path("M5 23V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm1-6h8l-2.625-3.5L11.5 14l-1.375-1.825zm7.713-5.288Q16 9.425 16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10t.713-.288M7 21V3z");
}
</style><path class="gnv018bot"/>`,
		"fallback": "material-symbols:mobile-screensaver-outline-sharp",
	});
}

export default Component;
