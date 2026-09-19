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
		"content": `<style>.enz0hdb6j {
  fill: currentColor;
  d: path("M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m-1 12H11V7h10zm-3.57-4.38l-2 2.57L14 13.47l-2 2.52h8z");
}
</style><path class="enz0hdb6j"/>`,
		"fallback": "ic:outline-burst-mode",
	});
}

export default Component;
