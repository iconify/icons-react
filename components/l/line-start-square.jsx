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
		"content": `<style>.dh36n-rss {
  fill: currentColor;
  d: path("M13 17.5H2v-11h11V11h9v2h-9z");
}
</style><path class="dh36n-rss"/>`,
		"fallback": "material-symbols:line-start-square",
	});
}

export default Component;
