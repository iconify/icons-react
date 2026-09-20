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
		"content": `<style>.ywjdr2bqg {
  fill: var(--svg-color--e0bb95, #e0bb95);
  d: path("M10 10h108v108H10z");
}
</style><path class="ywjdr2bqg"/>`,
		"fallback": "noto-v1:medium-light-skin-tone",
	});
}

export default Component;
