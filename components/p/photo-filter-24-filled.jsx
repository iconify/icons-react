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
		"content": `<style>.w4mfjrbjm {
  fill: currentColor;
  d: path("M9.5 2a7.5 7.5 0 0 1 7.179 5.321a7.5 7.5 0 1 1-9.357 9.358A7.5 7.5 0 0 1 9.5 2m7.498 7.599L17 9.5A7.5 7.5 0 0 1 9.6 17a5.5 5.5 0 1 0 7.399-7.4M9.5 4a5.5 5.5 0 0 0-2.498 10.401L7 14.5A7.5 7.5 0 0 1 14.4 7a5.5 5.5 0 0 0-4.9-3");
}
</style><path class="w4mfjrbjm"/>`,
		"fallback": "fluent:photo-filter-24-filled",
	});
}

export default Component;
