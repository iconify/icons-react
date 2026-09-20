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
		"content": `<style>.xhr_0nbrx {
  fill: currentColor;
  d: path("M6 14v-4H4v10h16V10H10V8h12v14H2V8h4V2h8v4H8v8zm-2-4v4zv10z");
}
</style><path class="xhr_0nbrx"/>`,
		"fallback": "material-symbols:markunread-mailbox-outline-sharp",
	});
}

export default Component;
