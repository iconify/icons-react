import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdoxu0bip.css';

const viewBox = {"width":320,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdoxu0bip"/>`,
		"fallback": "ps:posterous",
	});
}

export default Component;
