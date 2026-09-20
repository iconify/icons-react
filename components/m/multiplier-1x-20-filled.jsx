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
		"content": `<style>.i1sff3bfe {
  fill: currentColor;
  d: path("M8.5 6.75a.75.75 0 0 0-1.385-.398l-.048.076c-.214.341-.36.574-.575.811c-.225.247-.547.52-1.128.868a.75.75 0 1 0 .772 1.286c.34-.204.623-.397.864-.588v4.445a.75.75 0 0 0 1.5 0zm2.78 3.47a.75.75 0 1 0-1.06 1.06l.72.72l-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72l.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72l.72-.72a.75.75 0 0 0-1.06-1.06l-.72.72z");
}
</style><path class="i1sff3bfe"/>`,
		"fallback": "fluent:multiplier-1x-20-filled",
	});
}

export default Component;
