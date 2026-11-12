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
		"content": `<style>.g773-itfn {
  fill: currentColor;
  d: path("M8.25 18.984c0-.417.336-.755.75-.755h6c.414 0 .75.338.75.755a.75.75 0 0 1-.75.754H9a.75.75 0 0 1-.75-.754");
}

.hyz0sxbtx {
  fill: currentColor;
  d: path("M20 9.801v4.067c0 3.833 0 5.75-1.172 6.941S15.771 22 12 22s-5.657 0-6.828-1.191C4 19.619 4 17.701 4 13.868V9.8c0-3.833 0-5.75 1.172-6.94c.375-.383.825-.642 1.386-.819c.353-.11.728.047.942.35l.154.236c.634.97.855 1.307 1.368 1.631q.165.105.342.186c.591.274 1.273.274 2.636.274s2.044 0 2.636-.274q.177-.081.342-.186c.513-.324.734-.662 1.368-1.631l.154-.235c.2-.305.564-.467.91-.36c.577.176 1.036.438 1.418.827C20 4.051 20 5.968 20 9.801");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path class="hyz0sxbtx"/><path class="g773-itfn"/>`,
		"fallback": "solar:iphone-bold-duotone",
	});
}

export default Component;
