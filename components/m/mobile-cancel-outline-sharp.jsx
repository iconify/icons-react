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
		"content": `<style>.t121k3bbj {
  fill: currentColor;
  d: path("m9.65 15.058l2.35-2.35l2.35 2.35l.708-.708l-2.35-2.35l2.35-2.35l-.708-.708l-2.35 2.35l-2.35-2.35l-.708.708l2.35 2.35l-2.35 2.35zM6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3z");
}
</style><path class="t121k3bbj"/>`,
		"fallback": "material-symbols-light:mobile-cancel-outline-sharp",
	});
}

export default Component;
