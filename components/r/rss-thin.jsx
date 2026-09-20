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
		"content": `<style>.kxa3_0rfg {
  fill: currentColor;
  d: path("M104.08 151.92A67.52 67.52 0 0 1 124 200a4 4 0 0 1-8 0a60 60 0 0 0-60-60a4 4 0 0 1 0-8a67.52 67.52 0 0 1 48.08 19.92M56 84a4 4 0 0 0 0 8a108 108 0 0 1 108 108a4 4 0 0 0 8 0A116 116 0 0 0 56 84m116 0A162.92 162.92 0 0 0 56 36a4 4 0 0 0 0 8a155 155 0 0 1 110.31 45.69A155 155 0 0 1 212 200a4 4 0 0 0 8 0a162.92 162.92 0 0 0-48-116M60 188a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="kxa3_0rfg"/>`,
		"fallback": "ph:rss-thin",
	});
}

export default Component;
