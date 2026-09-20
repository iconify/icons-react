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
		"content": `<style>.cujrrmwdk {
  fill: currentColor;
  d: path("M11.32 2.785c-.568-1.047-2.071-1.047-2.638 0l-6.5 12a1.5 1.5 0 0 0 1.32 2.214H16.5a1.5 1.5 0 0 0 1.319-2.215z");
}
</style><path class="cujrrmwdk"/>`,
		"fallback": "fluent:triangle-up-20-filled",
	});
}

export default Component;
