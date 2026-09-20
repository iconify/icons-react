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
		"content": `<style>.o9tunqyot {
  fill: currentColor;
  d: path("M8 21v-8H3l9-11l9 11h-5v8zm2-2h4v-8h2.775L12 5.15L7.225 11H10zm2-8");
}
</style><path class="o9tunqyot"/>`,
		"fallback": "material-symbols:shift-outline",
	});
}

export default Component;
