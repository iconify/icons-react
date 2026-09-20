import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fz6ytm5qo {
  fill: currentColor;
  d: path("M7.066 5H8.62a2.25 2.25 0 0 1 2.122-1.5h9.5a4.25 4.25 0 0 1 4.25 4.25v9.5c0 .976-.62 1.807-1.49 2.118v1.555a3.75 3.75 0 0 0 2.99-3.673v-9.5A5.75 5.75 0 0 0 20.241 2h-9.5a3.75 3.75 0 0 0-3.675 3M5.75 6A3.75 3.75 0 0 0 2 9.75v12.5A3.75 3.75 0 0 0 5.75 26h12.5A3.75 3.75 0 0 0 22 22.25V9.75A3.75 3.75 0 0 0 18.25 6z");
}
</style><path class="fz6ytm5qo"/>`,
		"fallback": "fluent:square-multiple-28-filled",
	});
}

export default Component;
