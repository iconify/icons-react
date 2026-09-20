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
		"content": `<style>.gv6j_okrg {
  fill: currentColor;
  d: path("M14 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H17v11.5a.5.5 0 0 1-1 0V7h-1.5a.5.5 0 0 1-.5-.5zM13 3H6.14a2.5 2.5 0 0 0-2.452 2.01L3.49 6h-.74a.75.75 0 0 0 0 1.5h.44l-.111.56A1.5 1.5 0 0 0 2 9.5v4A1.5 1.5 0 0 0 3.5 15H15V8H4.11l.559-2.794A1.5 1.5 0 0 1 6.139 4H13zm2 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 6.5a1 1 0 0 1-1-1v-1h1zm-9-1v-1H4v1a1 1 0 1 0 2 0m-1-5.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0");
}
</style><path class="gv6j_okrg"/>`,
		"fallback": "fluent:vehicle-car-parking-20-filled",
	});
}

export default Component;
