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
		"content": `<style>.k6r152bnl {
  fill: currentColor;
  d: path("M11.05 14.308L8.942 12.2l.708-.708l1.4 1.4l3.55-3.55l.708.708zM6 22V2h12v20zm1-3.5h10v-13H7z");
}
</style><path class="k6r152bnl"/>`,
		"fallback": "material-symbols-light:security-update-good-sharp",
	});
}

export default Component;
