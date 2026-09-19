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
		"content": `<style>.doplcl7zi {
  fill: currentColor;
  d: path("M19 12.998H5v-2h14z");
}
</style><path class="doplcl7zi"/>`,
		"fallback": "ic:sharp-minus",
	});
}

export default Component;
