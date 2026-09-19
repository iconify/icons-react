import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2k62cc3j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2k62cc3j"/>`,
		"fallback": "ion:lock-closed",
	});
}

export default Component;
