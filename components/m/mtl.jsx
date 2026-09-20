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
		"content": `<style>.e4y7628xu {
  fill: var(--svg-color--fff, #fff);
  d: path("M3 4.125h1.125v15.75H3zM8.625 7.5H9.75v10.125H8.625zm5.625 2.25h1.125v5.625H14.25zm5.625-5.625H21v15.75h-1.125z");
}
</style><path class="e4y7628xu"/>`,
		"fallback": "token-branded:mtl",
	});
}

export default Component;
