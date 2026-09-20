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
		"content": `<style>.rgbs2h_sh {
  fill: currentColor;
  d: path("M3.885 19.577v-2h16.23v2h-1.769v-1h-5.461v1h-1.77v-1h-5.46v1zm2.942-4q-.343 0-.575-.232t-.233-.576V4.385q0-.344.232-.576q.233-.232.576-.232h10.346q.343 0 .576.232t.232.576v10.23q0 .409-.266.686q-.265.276-.657.276zm.192-1h9.962v-10H7.019zM9 8.154h6v-1H9zm-1.98 6.423v-10z");
}
</style><path class="rgbs2h_sh"/>`,
		"fallback": "material-symbols-light:pallet-outline",
	});
}

export default Component;
