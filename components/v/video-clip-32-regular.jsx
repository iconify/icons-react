import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vaourdldm {
  fill: currentColor;
  d: path("M6.5 4A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4zM4 8.5A2.5 2.5 0 0 1 6.5 6h19A2.5 2.5 0 0 1 28 8.5v15a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 23.5zm8 3.501V20a1 1 0 0 0 1.47.882l7.498-3.999a1 1 0 0 0 0-1.764l-7.497-4a1 1 0 0 0-1.471.883");
}
</style><path class="vaourdldm"/>`,
		"fallback": "fluent:video-clip-32-regular",
	});
}

export default Component;
