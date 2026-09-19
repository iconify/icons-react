import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvk7dfb5d.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvk7dfb5d"/>`,
		"fallback": "zmdi:leak-off",
	});
}

export default Component;
