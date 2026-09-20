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
		"content": `<style>.rsq4ukbpq {
  fill: currentColor;
  d: path("m19 23l-1.4-1.4l1.575-1.6H15v-2h4.175L17.6 16.4L19 15l4 4zM3 21V3h18v10.35q-.475-.175-.987-.262T18.975 13q-2.5 0-4.237 1.75T13 19q0 .525.088 1.025t.262.975zm8-4h2v-4h4v-2h-4V7h-2v4H7v2h4z");
}
</style><path class="rsq4ukbpq"/>`,
		"fallback": "material-symbols:tab-new-right-sharp",
	});
}

export default Component;
