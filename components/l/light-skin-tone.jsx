import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z-3stebpd {
  fill: var(--svg-color--fadcbc, #fadcbc);
  d: path("M10 10h108v108H10z");
}
</style><path class="z-3stebpd"/>`,
		"fallback": "noto-v1:light-skin-tone",
	});
}

export default Component;
