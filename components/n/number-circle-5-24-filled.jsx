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
		"content": `<style>.iobrxcc-d {
  fill: currentColor;
  d: path("M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M10.75 7a.75.75 0 0 0-.748.697l-.25 3.527a.75.75 0 0 0 .791.801h.015l.047-.003a26 26 0 0 1 .743-.028c.462-.011.936-.008 1.184.026a2 2 0 1 1-2.097 2.816a.75.75 0 1 0-1.362.628a3.5 3.5 0 1 0 3.667-4.93h-.003c-.385-.053-.978-.05-1.425-.04h-.005L11.45 8.5h2.802a.75.75 0 0 0 0-1.5z");
}
</style><path class="iobrxcc-d"/>`,
		"fallback": "fluent:number-circle-5-24-filled",
	});
}

export default Component;
