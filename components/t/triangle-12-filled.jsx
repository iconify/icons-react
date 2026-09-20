import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rqmdj4byv {
  fill: currentColor;
  d: path("M6.786 1.459a.903.903 0 0 0-1.572 0L1.122 8.628C.774 9.238 1.211 10 1.91 10h8.182c.698 0 1.135-.762.787-1.372z");
}
</style><path class="rqmdj4byv"/>`,
		"fallback": "fluent:triangle-12-filled",
	});
}

export default Component;
