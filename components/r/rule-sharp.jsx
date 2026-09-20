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
		"content": `<style>.pni3hwzxo {
  fill: currentColor;
  d: path("m14.112 19l-.689-.688l2.6-2.6l-2.6-2.6l.689-.689l2.6 2.6l2.6-2.6l.688.689l-2.6 2.6l2.6 2.6l-.688.688l-2.6-2.6zm1.994-8.327l-2.839-2.838l.689-.689l2.125 2.125l4.25-4.25l.688.714zM3 16.116v-1h8v1zm0-7.231v-1h8v1z");
}
</style><path class="pni3hwzxo"/>`,
		"fallback": "material-symbols-light:rule-sharp",
	});
}

export default Component;
