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
		"content": `<style>.ue_vhvbsw {
  fill: currentColor;
  d: path("M3 21V3h13l5 5v13zM15 5v4h4zM7 17h10v-2H7zm0-8h5V7H7zm0 4h10v-2H7z");
}
</style><path class="ue_vhvbsw"/>`,
		"fallback": "material-symbols:news-sharp",
	});
}

export default Component;
