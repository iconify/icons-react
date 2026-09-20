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
		"content": `<style>.m9x5pbbod {
  fill: var(--svg-color--f50db4, #f50db4);
  d: path("M21 11.829A8.83 8.83 0 0 1 12.171 3h-.342v8.829H3v.342A8.83 8.83 0 0 1 11.829 21h.342v-8.829H21z");
}
</style><path class="m9x5pbbod"/>`,
		"fallback": "token-branded:unichain",
	});
}

export default Component;
