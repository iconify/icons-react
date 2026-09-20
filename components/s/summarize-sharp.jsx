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
		"content": `<style>.q-i1fwpqr {
  fill: currentColor;
  d: path("M7 9h2V7H7zm0 4h2v-2H7zm0 4h2v-2H7zm-4 4V3h13l5 5v13zM15 5v4h4z");
}
</style><path class="q-i1fwpqr"/>`,
		"fallback": "material-symbols:summarize-sharp",
	});
}

export default Component;
