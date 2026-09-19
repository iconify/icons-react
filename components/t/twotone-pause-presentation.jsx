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
		"content": `<style>.h1aq07b1z {
  fill: currentColor;
  d: path("M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z");
}

.php1bcczk {
  fill: currentColor;
  d: path("M3 19h18V5H3zM13 8h2v8h-2zM9 8h2v8H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="php1bcczk"/><path class="h1aq07b1z"/>`,
		"fallback": "ic:twotone-pause-presentation",
	});
}

export default Component;
