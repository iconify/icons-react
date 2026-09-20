import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b70edv-3k {
  fill: currentColor;
  d: path("M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m9.766-21.287a1.5 1.5 0 0 1 0 2.575l-12.362 7.387c-1.5.897-3.404-.184-3.404-1.93V17.256c0-1.747 1.904-2.828 3.404-1.932z");
}
</style><path class="b70edv-3k"/>`,
		"fallback": "fluent:play-circle-48-filled",
	});
}

export default Component;
