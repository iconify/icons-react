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
		"content": `<style>.faab-lbtd {
  fill: currentColor;
  d: path("M12.5 11.25H14v1.5h-1.5zm2.5 0h1.5v1.5H15zm-5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z");
}

.mki5yvb1b {
  fill: currentColor;
  d: path("M1 5v14h22V5zm17 12H6V7h12z");
}
</style><path class="mki5yvb1b"/><path class="faab-lbtd"/>`,
		"fallback": "ic:sharp-smart-screen",
	});
}

export default Component;
