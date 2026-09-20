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
		"content": `<style>.sukshqqzl {
  fill: currentColor;
  d: path("M7 18a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm6-9a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1M6 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m7 10a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1m-2-2.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V11H4.5a.5.5 0 0 0 0 1H6v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H7z");
}
</style><path class="sukshqqzl"/>`,
		"fallback": "fluent:text-expand-24-filled",
	});
}

export default Component;
