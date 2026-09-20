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
		"content": `<style>.pjs8__adx {
  fill: currentColor;
  d: path("M3 18V6h18v12zm2.5-4.115h2.616q.309 0 .539-.23t.23-.54V11.52q0-.31-.23-.54t-.54-.229h-1.73V9.385h2.5V8.5H5.5v3.135H8V13H5.5zm6.192 1.423h6.616v-.166q0-.875-.88-1.355q-.878-.48-2.428-.48t-2.429.48t-.879 1.355zM15 11.692q.633 0 1.066-.433q.434-.434.434-1.067t-.434-1.066T15 8.692t-1.066.434t-.434 1.066t.434 1.067q.433.433 1.066.433");
}
</style><path class="pjs8__adx"/>`,
		"fallback": "material-symbols-light:universal-currency",
	});
}

export default Component;
