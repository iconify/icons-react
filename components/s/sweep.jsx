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
		"content": `<style>.azs_cs_hk {
  fill: currentColor;
  d: path("M10 18v-2h6v2zm-3.95 0l-5.7-5.695l1.425-1.43L6.05 15.15l9.172-9.175L16.65 7.4zM14 14v-2h6v2zm4-4V8h6v2z");
}
</style><path class="azs_cs_hk"/>`,
		"fallback": "material-symbols:sweep",
	});
}

export default Component;
