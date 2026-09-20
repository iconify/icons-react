import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rg4i3bxtw {
  fill: currentColor;
  d: path("M4.255 6a7 7 0 1 1-1.242 3.568A.53.53 0 0 0 2.5 9a.474.474 0 0 0-.48.435q-.018.28-.02.565a8 8 0 1 0 1.5-4.665V3.5a.5.5 0 0 0-1 0v3A.5.5 0 0 0 3 7h3a.5.5 0 0 0 0-1zm5.236.88A1 1 0 0 0 8 7.751v4.501a1 1 0 0 0 1.49.872l3.998-2.25a1 1 0 0 0 0-1.743z");
}
</style><path class="rg4i3bxtw"/>`,
		"fallback": "fluent:replay-20-filled",
	});
}

export default Component;
