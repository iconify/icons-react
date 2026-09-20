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
		"content": `<style>.ug9-2zbjl {
  fill: var(--svg-color--bf8f68, #bf8f68);
  d: path("M10 10h108v108H10z");
}
</style><path class="ug9-2zbjl"/>`,
		"fallback": "noto-v1:medium-skin-tone",
	});
}

export default Component;
