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
		"content": `<style>.i8mkr088g {
  fill: currentColor;
  d: path("M15.027 12.727q.454-.217.454-.727t-.454-.727l-6.865-3.26q-.404-.192-.783.038T7 8.741v1.936L11 12l-4 1.323v1.937q0 .46.379.689q.379.23.783.038zM5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z");
}
</style><path class="i8mkr088g"/>`,
		"fallback": "material-symbols-light:outbox-alt-rounded",
	});
}

export default Component;
