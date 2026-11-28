import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv0ilfb2b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv0ilfb2b"/>`,
		"fallback": "pullo:shield-user",
	});
}

export default Component;
