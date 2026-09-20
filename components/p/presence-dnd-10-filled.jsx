import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pd6y98bku {
  fill: currentColor;
  d: path("M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10M3.5 4.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1");
}
</style><path class="pd6y98bku"/>`,
		"fallback": "fluent:presence-dnd-10-filled",
	});
}

export default Component;
