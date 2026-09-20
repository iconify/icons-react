import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jtz7aib1j {
  fill: currentColor;
  d: path("m12.274 12.981l1.872 1.873a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L2.74 3.447C2.288 3.814 2 4.373 2 5v.201l5.404 2.91L8.56 9.267l-.323.173a.5.5 0 0 1-.474 0L2 6.337V11a2 2 0 0 0 2 2h8q.14 0 .274-.019m-1.876-4.704l3.461 3.461c.091-.228.141-.477.141-.738V6.337zM5.121 3L9.66 7.538L14 5.201V5a2 2 0 0 0-2-2z");
}
</style><path class="jtz7aib1j"/>`,
		"fallback": "fluent:mail-off-16-filled",
	});
}

export default Component;
