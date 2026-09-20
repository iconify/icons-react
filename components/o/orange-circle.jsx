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
		"content": `<style>.y-jqxs3dx {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--f4900c, #f4900c);
}
</style><circle class="y-jqxs3dx"/>`,
		"fallback": "twemoji:orange-circle",
	});
}

export default Component;
