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
		"content": `<style>.xj7otfbam {
  fill: var(--svg-color--ff1a2d, #ff1a2d);
  fill-rule: evenodd;
  d: path("M9.318 15.614a4.5 4.5 0 1 1 4.932.284v-.893l-4.032 2.373v1.953l-.9.9zm.9.72l4.032-2.373V9.534l-4.032 2.378zM21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0");
}
</style><path clip-rule="evenodd" class="xj7otfbam"/>`,
		"fallback": "token-branded:optopia",
	});
}

export default Component;
