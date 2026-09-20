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
		"content": `<style>.jh36jrbft {
  fill: currentColor;
  d: path("M12 17q.31 0 .54-.23t.23-.54t-.23-.539t-.54-.23t-.54.23t-.23.54t.23.54T12 17m-3.46-.23q.23-.23.23-.54q0-.309-.23-.539t-.54-.23t-.54.23t-.23.54t.23.54T8 17t.54-.23M16 17q.31 0 .54-.23t.23-.54t-.23-.539t-.54-.23t-.54.23t-.23.54t.23.54T16 17M4 20V4h16v16zm1-1h14V5H5zM5 5v14z");
}
</style><path class="jh36jrbft"/>`,
		"fallback": "material-symbols-light:shelf-auto-hide-outline-sharp",
	});
}

export default Component;
