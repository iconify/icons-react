import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.atm_ajbry {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.5 5.5 0 0 0-2.5-.6c-1.177 0-2.268.37-3.163 1H7.5A1.5 1.5 0 0 0 6 11.5c0 1.116.459 2.01 1.212 2.615c.505.405 1.126.668 1.803.796c.055.748.26 1.454.585 2.089H6a3 3 0 0 1-3-3zm7-1a2 2 0 1 0 0 4a2 2 0 0 0 0-4m9 9.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708");
}
</style><path class="atm_ajbry"/>`,
		"fallback": "fluent:person-square-checkmark-20-filled",
	});
}

export default Component;
