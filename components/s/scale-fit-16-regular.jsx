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
		"content": `<style>.z6vb6emip {
  fill: currentColor;
  d: path("M6.352 6.15a.5.5 0 0 1 0 .708l-.641.641L7.25 7.5a.5.5 0 1 1 0 1H5.7l.652.65a.5.5 0 1 1-.707.708l-1.5-1.5a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 0 1 .707 0M10.3 8.5l-.65.651a.5.5 0 1 0 .707.707l1.5-1.5a.5.5 0 0 0 0-.707l-1.5-1.5a.5.5 0 0 0-.707.707l.643.642H8.75a.5.5 0 1 0 0 1zM2 4.998a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z");
}
</style><path class="z6vb6emip"/>`,
		"fallback": "fluent:scale-fit-16-regular",
	});
}

export default Component;
