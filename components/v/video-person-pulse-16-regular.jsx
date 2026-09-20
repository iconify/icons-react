import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zt_g-jccz {
  fill: currentColor;
  d: path("M7 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2M0 2.75C0 1.784.784 1 1.75 1h10.5c.966 0 1.75.784 1.75 1.75V6.6a5.5 5.5 0 0 0-1-.393V2.75a.75.75 0 0 0-.75-.75H1.75a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75H4V9a1 1 0 0 1 1-1h2.257A5.5 5.5 0 0 0 6.6 9H5v1h1.207a5.5 5.5 0 0 0-.185 1H1.75A1.75 1.75 0 0 1 0 9.25zm16 8.75a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-5.556-2a.5.5 0 0 0-.475.303l-.584 1.364H9a.5.5 0 1 0 0 1h.714a.5.5 0 0 0 .46-.303l.212-.496l.643 1.8a.5.5 0 0 0 .935.018l.672-1.673l.209.39a.5.5 0 0 0 .44.264H14a.5.5 0 0 0 0-1h-.415l-.573-1.07a.5.5 0 0 0-.905.05l-.58 1.443l-.628-1.758a.5.5 0 0 0-.455-.332");
}
</style><path class="zt_g-jccz"/>`,
		"fallback": "fluent:video-person-pulse-16-regular",
	});
}

export default Component;
