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
		"content": `<style>.lbgtyoyzb {
  fill: currentColor;
  d: path("M7.46 23.54q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m4.54.23q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m3.46-.23q-.23-.23-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23t-.54-.23m-4.883-11.117Q10 11.846 10 11V5q0-.846.577-1.423T12 3t1.423.577T14 5v6q0 .846-.577 1.423T12 13t-1.423-.577M11.5 20.5v-3.485q-2.35-.234-3.925-1.947T6 11h1q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h1q0 2.356-1.575 4.068T12.5 17.015V20.5zm1.213-8.787Q13 11.425 13 11V5q0-.425-.288-.712T12 4t-.712.288T11 5v6q0 .425.288.713T12 12t.713-.288");
}
</style><path class="lbgtyoyzb"/>`,
		"fallback": "material-symbols-light:settings-voice-outline-sharp",
	});
}

export default Component;
