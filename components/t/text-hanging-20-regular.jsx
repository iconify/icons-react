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
		"content": `<style>.t9gc5kz1u {
  fill: currentColor;
  d: path("M3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm4 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM7 9.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-2.146 2.146l-1.5-1.5a.5.5 0 0 0-.708.708L3.793 12l-1.147 1.146a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708");
}
</style><path class="t9gc5kz1u"/>`,
		"fallback": "fluent:text-hanging-20-regular",
	});
}

export default Component;
