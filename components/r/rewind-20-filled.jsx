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
		"content": `<style>.ye6z4e41r {
  fill: currentColor;
  d: path("M10 5.487a1 1 0 0 0-1.591-.806l-5.88 4.311a1.25 1.25 0 0 0 0 2.016l5.88 4.312A1 1 0 0 0 10 14.514v-3.16l5.409 3.966A1 1 0 0 0 17 14.514V5.487a1 1 0 0 0-1.591-.806L10 8.647zm-1.59-.806l.293.399Z");
}
</style><path class="ye6z4e41r"/>`,
		"fallback": "fluent:rewind-20-filled",
	});
}

export default Component;
