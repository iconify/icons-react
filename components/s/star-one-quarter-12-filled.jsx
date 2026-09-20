import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p-raec0bp {
  fill: currentColor;
  d: path("m5 2.12l-.828 1.678l-2.486.362a.798.798 0 0 0-.444 1.364l1.8 1.754l-.425 2.475a.8.8 0 0 0-.005.254a.8.8 0 0 0 1.165.59L5 9.954z");
}
</style><path class="p-raec0bp"/>`,
		"fallback": "fluent:star-one-quarter-12-filled",
	});
}

export default Component;
