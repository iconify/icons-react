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
		"content": `<style>.yp9a5ybum {
  fill: currentColor;
  d: path("M5 23V1h14v5.1h1v4.8h-1V12h-2V3H7v18h5v2zm14.875 0l-2.2-2.2q-.275.125-.575.163t-.6.037q-1.475 0-2.488-1.012T13 17.525q0-.45.113-.875t.312-.8l2.375 2.375l1.4-1.425l-2.375-2.35q.375-.2.8-.312t.875-.113q1.45 0 2.475 1.013T20 17.525q0 .3-.05.6t-.175.575L22 20.9zM12.713 5.713Q13 5.424 13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6t.713-.288M7 21V3z");
}
</style><path class="yp9a5ybum"/>`,
		"fallback": "material-symbols:mobile-wrench-outline-sharp",
	});
}

export default Component;
