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
		"content": `<style>.z4m118usc {
  fill: currentColor;
  d: path("M6 15.5h3.442q.27 0 .442-.173q.174-.173.174-.442v-5.77q0-.269-.173-.442T9.442 8.5H6zm-1 1v-9h4.442q.672 0 1.144.472t.472 1.143v5.77q0 .67-.472 1.143q-.472.472-1.144.472zm10.779 0l-3.067-9h1l2.644 7.642L19 7.5h1l-3.067 9z");
}
</style><path class="z4m118usc"/>`,
		"fallback": "material-symbols-light:language-us-dvorak-outline",
	});
}

export default Component;
