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
		"content": `<style>.vp4b3wybq {
  fill: currentColor;
  d: path("M6.5 4A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h19a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4zm5.5 8.001a1 1 0 0 1 1.47-.882l7.498 3.999a1 1 0 0 1 0 1.764l-7.497 3.999A1 1 0 0 1 12 19.999z");
}
</style><path class="vp4b3wybq"/>`,
		"fallback": "fluent:video-clip-32-filled",
	});
}

export default Component;
