import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jq8pltb-z {
  fill: currentColor;
  d: path("M22.318 3.318a4.5 4.5 0 0 1 6.364 6.364l-8.66 8.66a3 3 0 0 1-1.292.762l-6.453 1.857a1 1 0 0 1-1.238-1.237l1.857-6.454a3 3 0 0 1 .762-1.292zM16 6q.721 0 1.415.1l1.693-1.694A12 12 0 0 0 16 4C9.373 4 4 9.373 4 16s5.373 12 12 12s12-5.373 12-12c0-1.075-.141-2.117-.407-3.108l-1.692 1.693q.098.694.099 1.415c0 5.523-4.477 10-10 10S6 21.523 6 16S10.477 6 16 6");
}
</style><path class="jq8pltb-z"/>`,
		"fallback": "fluent:status-32-filled",
	});
}

export default Component;
