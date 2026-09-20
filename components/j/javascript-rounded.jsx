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
		"content": `<style>.zovxavmel {
  fill: currentColor;
  d: path("M7.116 14.692q-.356 0-.62-.264q-.265-.264-.265-.62v-.866q0-.19.126-.316t.316-.126t.317.126t.126.316v.866h2.076V9.75q0-.19.126-.316t.316-.126t.317.126t.126.316v4.058q0 .356-.265.62q-.264.264-.62.264zm5.961 0q-.31 0-.54-.23t-.23-.539v-.538q0-.162.112-.273t.273-.112h.116q.161 0 .273.112t.111.273v.423h2.616v-1.5h-2.885q-.252 0-.433-.182t-.182-.434v-1.615q0-.31.23-.54t.539-.23h2.846q.31 0 .54.23t.23.54v.539q0 .161-.112.273t-.273.111h-.116q-.161 0-.273-.111t-.111-.273v-.424h-2.616v1.5h2.885q.252 0 .434.182t.181.434v1.615q0 .31-.23.54t-.539.23z");
}
</style><path class="zovxavmel"/>`,
		"fallback": "material-symbols-light:javascript-rounded",
	});
}

export default Component;
