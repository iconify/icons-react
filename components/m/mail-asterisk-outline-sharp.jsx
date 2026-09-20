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
		"content": `<style>.leaou1oux {
  fill: currentColor;
  d: path("m12 11l8-5H4zM2 20V4h20v9h-2V8l-8 5l-8-5v10h9v2zm15.875 2.95l-1.75-1l1.15-1.95H15v-2h2.275l-1.15-1.95l1.75-1L19 17l1.125-1.95l1.75 1l-1.15 1.95H23v2h-2.275l1.15 1.95l-1.75 1L19 21z");
}
</style><path class="leaou1oux"/>`,
		"fallback": "material-symbols:mail-asterisk-outline-sharp",
	});
}

export default Component;
