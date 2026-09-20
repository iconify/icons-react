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
		"content": `<style>.hps557b5v {
  fill: currentColor;
  d: path("M17.212 2.237a.75.75 0 0 0-1.423-.474l-.75 2.249a.75.75 0 0 0 1.423.474zm4.568-.017a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m-8.91 1.52a2.325 2.325 0 0 0-3.794.577L3.178 16.56a1.8 1.8 0 0 0 .387 2.09l1.439 1.358a1.8 1.8 0 0 0 1.964.336l1.417-.628a4 4 0 0 0 7.314-3.24l3.42-1.516a2.325 2.325 0 0 0 .758-3.712zm1.457 13.342a2.5 2.5 0 0 1-4.569 2.024zM19 8.249a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75");
}
</style><path class="hps557b5v"/>`,
		"fallback": "fluent:megaphone-loud-24-filled",
	});
}

export default Component;
