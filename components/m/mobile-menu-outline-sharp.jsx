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
		"content": `<style>.hx9x16brb {
  fill: currentColor;
  d: path("M8 21.789q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.229t.54.23t.23.54t-.23.539t-.54.23m3.46-.23q-.23-.23-.23-.54t.23-.54q.23-.229.54-.229t.54.23t.23.54t-.23.539t-.54.23t-.54-.23m4 0q-.23-.23-.23-.54t.23-.54q.23-.229.54-.229t.54.23t.23.54t-.23.539t-.54.23t-.54-.23M16.192 17V3H7.808v14zM12.588 6.086q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22M7.808 3v14zm-1 15V2h10.384v3.723h.731v2.9h-.73V18z");
}
</style><path class="hx9x16brb"/>`,
		"fallback": "material-symbols-light:mobile-menu-outline-sharp",
	});
}

export default Component;
