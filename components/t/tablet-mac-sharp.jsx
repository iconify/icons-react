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
		"content": `<style>.hz0p_mbcs {
  fill: currentColor;
  d: path("M4 22V2h16v20zm1-5.462h14V5.5H5zm7.54 3.27q.23-.23.23-.539t-.23-.54q-.23-.229-.54-.229t-.54.23t-.23.54t.23.539t.54.23t.54-.23");
}
</style><path class="hz0p_mbcs"/>`,
		"fallback": "material-symbols-light:tablet-mac-sharp",
	});
}

export default Component;
