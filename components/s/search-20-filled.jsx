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
		"content": `<style>.t7a3y70wr {
  fill: currentColor;
  d: path("M13.535 14.596a6.5 6.5 0 1 1 1.06-1.06l3.435 3.434a.75.75 0 0 1-.976 1.133l-.084-.073zM14.5 9.5a5 5 0 1 0-10 0a5 5 0 0 0 10 0");
}
</style><path class="t7a3y70wr"/>`,
		"fallback": "fluent:search-20-filled",
	});
}

export default Component;
