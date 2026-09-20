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
		"content": `<style>.lxx6g_vaj {
  fill: currentColor;
  d: path("M7 18h2v-2h2v-2H9v-2H7v2H5v2h2zm6-3.5h6V13h-6zm0 3h4V16h-4zM2 22V7h7V2h6v5h7v15zm9-13h2V4h-2z");
}
</style><path class="lxx6g_vaj"/>`,
		"fallback": "material-symbols:medical-information-sharp",
	});
}

export default Component;
