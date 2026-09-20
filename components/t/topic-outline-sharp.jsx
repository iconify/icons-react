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
		"content": `<style>.u5h3mpbar {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm2-2h16V8h-8.825l-2-2H4zm0 0V6zm2-2h8v-2H6zm0-4h12v-2H6z");
}
</style><path class="u5h3mpbar"/>`,
		"fallback": "material-symbols:topic-outline-sharp",
	});
}

export default Component;
