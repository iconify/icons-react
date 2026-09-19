import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3469cbxe.css';
import '../../css/n/n8ytkn-vp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3469cbxe"/><path class="n8ytkn-vp"/>`,
		"fallback": "carbon:view",
	});
}

export default Component;
