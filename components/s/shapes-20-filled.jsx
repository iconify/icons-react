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
		"content": `<style>.k75_w1brh {
  fill: currentColor;
  d: path("M2 7.5A5.5 5.5 0 0 1 12.978 7H10.5A3.5 3.5 0 0 0 7 10.5v2.478A5.5 5.5 0 0 1 2 7.5m8.5.5A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8z");
}
</style><path class="k75_w1brh"/>`,
		"fallback": "fluent:shapes-20-filled",
	});
}

export default Component;
