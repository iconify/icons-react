import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kghp-3gov {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5.07l-.41-.41a2.25 2.25 0 0 0-3.182 0l-3.749 3.75A2.24 2.24 0 0 0 10 16H4a2 2 0 0 1-2-2zm13.116 5.366a1.25 1.25 0 0 1 1.767 0l1.75 1.75a1.25 1.25 0 0 1 0 1.768l-2.576 2.575l-3.518-3.516zm-3.175 3.175l-.575.575a1.25 1.25 0 0 0 0 1.768l1.75 1.749a1.25 1.25 0 0 0 1.767 0l.576-.575z");
}
</style><path class="kghp-3gov"/>`,
		"fallback": "fluent:slide-eraser-20-filled",
	});
}

export default Component;
