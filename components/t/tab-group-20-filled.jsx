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
		"content": `<style>.iqfroyb6u {
  fill: currentColor;
  d: path("M3.5 4A2.5 2.5 0 0 0 1 6.5v5A2.5 2.5 0 0 0 3.5 14h11a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 4zM5 9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 9m-1.496 6c.456.607 1.182 1 2 1h9a4.5 4.5 0 0 0 4.5-4.5v-3c0-.818-.393-1.544-1-2v5a3.5 3.5 0 0 1-3.5 3.5z");
}
</style><path class="iqfroyb6u"/>`,
		"fallback": "fluent:tab-group-20-filled",
	});
}

export default Component;
