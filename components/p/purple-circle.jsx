import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j6bk8wgmi {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--aa8ed6, #aa8ed6);
}
</style><circle class="j6bk8wgmi"/>`,
		"fallback": "twemoji:purple-circle",
	});
}

export default Component;
