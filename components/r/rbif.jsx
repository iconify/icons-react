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
		"content": `<style>.y4yx2dbce {
  fill: var(--svg-color--0095f1, #0095f1);
  d: path("M5.813 21h5.062V3H9.61c.18 4.871-.337 15.294-3.796 18m12.375 0h-5.063V3h1.266c-.18 4.871.337 15.294 3.797 18");
}
</style><path class="y4yx2dbce"/>`,
		"fallback": "token-branded:rbif",
	});
}

export default Component;
