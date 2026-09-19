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
		"content": `<style>.bzqt9eb7d {
  fill: currentColor;
  d: path("M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68l-3.75-3.75l2.53-2.54l3.75 3.75z");
}
</style><path class="bzqt9eb7d"/>`,
		"fallback": "ic:sharp-border-color",
	});
}

export default Component;
