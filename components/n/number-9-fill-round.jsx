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
		"content": `<style>.op1oeqo0a {
  fill: currentColor;
  d: path("M15 17v-5.999A5 5 0 1 1 17 7v10a5 5 0 0 1-10 0a1 1 0 0 1 2 0a3 3 0 1 0 6 0m0-10a3 3 0 1 0-6 0a3 3 0 0 0 6 0");
}
</style><path class="op1oeqo0a"/>`,
		"fallback": "coolicons:number-9-fill-round",
	});
}

export default Component;
