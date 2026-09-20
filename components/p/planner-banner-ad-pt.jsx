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
		"content": `<style>.fo7atnbgq {
  fill: currentColor;
  d: path("M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .69-.462 1.153T17.384 21zm1.115-3.5h8.692l-2.757-3.654l-2.454 3.077l-1.589-1.884z");
}
</style><path class="fo7atnbgq"/>`,
		"fallback": "material-symbols-light:planner-banner-ad-pt",
	});
}

export default Component;
