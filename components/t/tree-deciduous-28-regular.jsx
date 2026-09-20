import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ko5__fboe {
  fill: currentColor;
  d: path("M14 2a5 5 0 0 0-4.79 3.562a5 5 0 0 0-4.021 6.303A5 5 0 0 0 8 21h3v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3h3a5 5 0 0 0 2.811-9.135a5 5 0 0 0-4.021-6.303A5 5 0 0 0 14 2m1.5 19v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3zM10.554 6.385a3.501 3.501 0 0 1 6.892 0a.75.75 0 0 0 .707.618a3.5 3.5 0 0 1 3.057 4.894a.75.75 0 0 0 .353.97A3.5 3.5 0 0 1 20 19.5H8a3.5 3.5 0 0 1-1.563-6.633a.75.75 0 0 0 .353-.97a3.5 3.5 0 0 1 3.058-4.893a.75.75 0 0 0 .706-.62");
}
</style><path class="ko5__fboe"/>`,
		"fallback": "fluent:tree-deciduous-28-regular",
	});
}

export default Component;
