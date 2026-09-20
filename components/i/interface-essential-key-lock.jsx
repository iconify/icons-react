import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdb2zyb2y.css';
import '../../css/y/yx5o39afx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdb2zyb2y"/><path class="yx5o39afx"/>`,
		"fallback": "streamline-pixel:interface-essential-key-lock",
	});
}

export default Component;
