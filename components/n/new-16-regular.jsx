import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uwvketboh {
  fill: currentColor;
  d: path("M3.502 11h5a.5.5 0 0 1 .09.992l-.09.008h-5a.5.5 0 0 1-.09-.992zh5zm1.646-5.854a.5.5 0 0 1 .638-.057l.07.058l3.998 4a.5.5 0 0 1-.638.764l-.07-.058l-3.998-4a.5.5 0 0 1 0-.707M11.502 3a.5.5 0 0 1 .491.41l.009.09v5a.5.5 0 0 1-.992.09l-.008-.09v-5a.5.5 0 0 1 .5-.5");
}
</style><path class="uwvketboh"/>`,
		"fallback": "fluent:new-16-regular",
	});
}

export default Component;
