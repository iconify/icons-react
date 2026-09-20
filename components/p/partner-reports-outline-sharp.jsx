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
		"content": `<style>.fzeld7bks {
  fill: currentColor;
  d: path("M11 13V3h2v10zm-8 8v-5h2v3h14v-3h2v5zm8-4v-2h2v2z");
}
</style><path class="fzeld7bks"/>`,
		"fallback": "material-symbols:partner-reports-outline-sharp",
	});
}

export default Component;
