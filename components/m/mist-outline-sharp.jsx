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
		"content": `<style>.t5eu3dbfv {
  fill: currentColor;
  d: path("M3 19v-2h12v2zm14 0v-2h4v2zM3 15v-2h4v2zm6 0v-2h12v2zm-6-4V9h13v2zm15 0V9h3v2zM3 7V5h7v2zm9 0V5h9v2z");
}
</style><path class="t5eu3dbfv"/>`,
		"fallback": "material-symbols:mist-outline-sharp",
	});
}

export default Component;
