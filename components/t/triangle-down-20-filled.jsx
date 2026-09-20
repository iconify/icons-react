import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oq9hetbzk {
  fill: currentColor;
  d: path("M11.32 17.215c-.568 1.047-2.071 1.047-2.638 0l-6.5-12a1.5 1.5 0 0 1 1.32-2.213H16.5a1.5 1.5 0 0 1 1.319 2.214z");
}
</style><path class="oq9hetbzk"/>`,
		"fallback": "fluent:triangle-down-20-filled",
	});
}

export default Component;
