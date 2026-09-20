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
		"content": `<style>.avq6rzb8x {
  fill: currentColor;
  d: path("M7 20v-4H3.577v-5.384q0-.852.577-1.426t1.423-.574h12.846q.852 0 1.426.574t.574 1.426v.807q-.31-.1-.643-.165q-.334-.066-.666-.066q-1.7 0-3.115.88q-1.414.878-2.172 2.39H8V19h5.466q.078.28.203.521q.125.24.264.479zM7 7.846v-3.23h10v3.23zm10.95 11.618l-2.138-2.114l.713-.708l1.425 1.42l3.525-3.525l.713.688z");
}
</style><path class="avq6rzb8x"/>`,
		"fallback": "material-symbols-light:print-connect",
	});
}

export default Component;
