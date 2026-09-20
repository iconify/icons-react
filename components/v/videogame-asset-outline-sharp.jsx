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
		"content": `<style>.bzj_3bb9c {
  fill: currentColor;
  d: path("M3 17V7h18v10zm1-1h16V8H4zm3.5-1.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2zm7.707-.291q.293-.291.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293t.709-.291m3-3q.293-.291.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293t.709-.291M4 16V8z");
}
</style><path class="bzj_3bb9c"/>`,
		"fallback": "material-symbols-light:videogame-asset-outline-sharp",
	});
}

export default Component;
