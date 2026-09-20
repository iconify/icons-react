import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jfj_79idf {
  fill: currentColor;
  d: path("M224 56v56c0 25.24-5.85 45.72-14.3 62.14a4 4 0 0 1-6.53.87L86.52 46.69a4 4 0 0 1 3-6.69H208a16 16 0 0 1 16 16M53.92 34.62A8 8 0 0 0 40.26 42A16 16 0 0 0 32 56v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53a132 132 0 0 0 10.05-9.19l14.9 16.38a8 8 0 1 0 11.84-10.76Z");
}
</style><path class="jfj_79idf"/>`,
		"fallback": "ph:shield-slash-fill",
	});
}

export default Component;
