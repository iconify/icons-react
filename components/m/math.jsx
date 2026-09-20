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
		"content": `<style>.xlff25bxm {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M8.625 9.975a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m0 3.6a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25M16.5 12.45a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0m-9.675-.675a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25M14.7 10.65a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0m-4.275 1.125a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25M18.3 10.65a1.124 1.124 0 1 1-2.25 0a1.124 1.124 0 0 1 2.25 0m-2.925-.675a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m-2.475 2.7a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m-2.7 2.7a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8m9.45-2.7a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m-2.25 2.7a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8m-11.25-2.7a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m-2.7 1.8a.45.45 0 1 0 0-.9a.45.45 0 0 0 0 .9m2.25 1.35a.45.45 0 1 1-.9 0a.45.45 0 0 1 .9 0m6.3.45a.45.45 0 1 0 0-.9a.45.45 0 0 0 0 .9m7.2-.45a.45.45 0 1 1-.9 0a.45.45 0 0 1 .9 0m1.35-1.35a.45.45 0 1 0 0-.899a.45.45 0 0 0 0 .899m-12.825 0a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0m5.85.9a.9.9 0 1 0 0-1.8a.9.9 0 0 0 0 1.8");
}
</style><path clip-rule="evenodd" class="xlff25bxm"/>`,
		"fallback": "token-branded:math",
	});
}

export default Component;
