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
		"content": `<style>.eosbo_b-k {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2H5v3H2zM6 5V2h4v3zM2 6h3v4H2zm4 0v4h2.003l.001-2.5A1.5 1.5 0 0 1 9.5 6.001zm8 3.844l-3-2.973V6h3zM8.002 11l-.001 3H6v-3zM2 11h3v3h-.5A2.5 2.5 0 0 1 2 11.5zm12-6.5V5h-3V2h.5A2.5 2.5 0 0 1 14 4.5M9.856 7.146a.5.5 0 0 0-.852.355L9 15.499a.5.5 0 0 0 .9.301l1.994-2.647l3.497.777a.5.5 0 0 0 .46-.844z");
}
</style><path class="eosbo_b-k"/>`,
		"fallback": "fluent:table-cursor-16-filled",
	});
}

export default Component;
