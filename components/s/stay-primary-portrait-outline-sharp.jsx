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
		"content": `<style>.flgpn_o7m {
  fill: currentColor;
  d: path("M12 16.462q-.261 0-.438-.177t-.177-.439t.177-.438t.438-.177t.439.177t.176.438t-.177.439t-.438.177m-.5-2.962V7.423h1V13.5zM6 22V2h12v20zm1-2.5V21h10v-1.5zm0-1h10v-13H7zm0-14h10V3H7zm0 0V3zm0 15V21z");
}
</style><path class="flgpn_o7m"/>`,
		"fallback": "material-symbols-light:stay-primary-portrait-outline-sharp",
	});
}

export default Component;
