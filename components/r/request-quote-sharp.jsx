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
		"content": `<style>.imko2zvxe {
  fill: currentColor;
  d: path("M11 19h2v-1h2v-5h-4v-1h4v-2h-2V9h-2v1H9v5h4v1H9v2h2zm-7 3V2h11l5 5v15zm2-2h12V8h-4V4H6zM6 4h8v4h4l-4-4v4h4v12H6z");
}
</style><path class="imko2zvxe"/>`,
		"fallback": "material-symbols:request-quote-sharp",
	});
}

export default Component;
