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
		"content": `<style>.x4tokifqa {
  fill: currentColor;
  d: path("M3 20V7h6V4h6v3h6v13zm7-13h4V5h-4zm1 9.808l3.308-3.308L11 10.192l-.708.708l2.6 2.6l-2.6 2.6z");
}
</style><path class="x4tokifqa"/>`,
		"fallback": "material-symbols-light:next-week-sharp",
	});
}

export default Component;
