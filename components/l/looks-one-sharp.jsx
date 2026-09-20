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
		"content": `<style>.sfj_hbcxi {
  fill: currentColor;
  d: path("M12 17h2V7h-4v2h2zm9 4H3V3h18z");
}
</style><path class="sfj_hbcxi"/>`,
		"fallback": "material-symbols:looks-one-sharp",
	});
}

export default Component;
