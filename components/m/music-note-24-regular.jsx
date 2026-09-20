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
		"content": `<style>.cogwfyu_x {
  fill: currentColor;
  d: path("M11.513 2.048a.75.75 0 0 0-1.013.702v12.127a4 4 0 1 0 1.476 3.56a.8.8 0 0 0 .024-.187V8.832l6.987 2.62A.75.75 0 0 0 20 10.75V7.483a3.25 3.25 0 0 0-2.109-3.044zM10.5 18a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m8-8.332L12 7.23V3.832l5.365 2.012A1.75 1.75 0 0 1 18.5 7.483z");
}
</style><path class="cogwfyu_x"/>`,
		"fallback": "fluent:music-note-24-regular",
	});
}

export default Component;
