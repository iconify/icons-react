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
		"content": `<style>.vd8ihccrs {
  fill: currentColor;
  d: path("M8 21.829V8.83A3.01 3.01 0 0 0 10 6V5a3 3 0 1 1 6 0v3a.997.997 0 0 0 1 1h2a3 3 0 0 1 3 3v2a1 1 0 0 1-.051.316l-2 6c-.196.586-.66 1.031-1.203 1.302c-.541.271-1.145.382-1.746.382H9a3 3 0 0 1-1-.171m-2 0A3 3 0 0 1 2 19v-7a3 3 0 0 1 3-3h1Z");
}
</style><path class="vd8ihccrs"/>`,
		"fallback": "coolicons:thumbs-up-fill",
	});
}

export default Component;
