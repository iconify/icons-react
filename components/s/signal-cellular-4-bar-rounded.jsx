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
		"content": `<style>.gg34kmehp {
  fill: currentColor;
  d: path("M4.598 21q-.315 0-.488-.204q-.172-.204-.172-.475q0-.137.037-.235t.148-.209L19.877 4.123q.112-.111.21-.148t.233-.036q.272 0 .476.172t.204.487v15.479q0 .385-.27.654t-.653.269z");
}
</style><path class="gg34kmehp"/>`,
		"fallback": "material-symbols-light:signal-cellular-4-bar-rounded",
	});
}

export default Component;
