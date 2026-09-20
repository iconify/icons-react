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
		"content": `<style>.nata3ac8n {
  fill: var(--svg-color--9b643c, #9b643c);
  d: path("M10 10h108v108H10z");
}
</style><path class="nata3ac8n"/>`,
		"fallback": "noto-v1:medium-dark-skin-tone",
	});
}

export default Component;
