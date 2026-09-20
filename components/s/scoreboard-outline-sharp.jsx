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
		"content": `<style>.a90v0ccas {
  fill: currentColor;
  d: path("M14.385 14.692V9.308h3.884v5.384zm.884-.884h2.116v-3.616h-2.116zm-9.538.884v-3.076h3v-1.424h-3v-.884h3.885v3.077h-3v1.423h3v.884zm5.827-3.826V9.98h.884v.885zm0 3.269v-.885h.884v.885zm-8.596 4.653V5.327H7.5v-2h1v2h7v-2h1v2h4.539v13.462zm1-1h7.596V16.52h.884v1.27h7.597V6.326h-7.597v1.27h-.884v-1.27H3.962zm0 0V6.327z");
}
</style><path class="a90v0ccas"/>`,
		"fallback": "material-symbols-light:scoreboard-outline-sharp",
	});
}

export default Component;
