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
		"content": `<style>.ejsik-bsz {
  fill: currentColor;
  d: path("M10 2a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.5 0v-9.5A.75.75 0 0 1 10 2M6.25 5.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zm9 0a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zm-6.22 9.47a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.97.97z");
}
</style><path class="ejsik-bsz"/>`,
		"fallback": "fluent:text-indent-decrease-rotate-270-20-filled",
	});
}

export default Component;
