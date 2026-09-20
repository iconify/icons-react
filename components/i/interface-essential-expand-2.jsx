import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b40784e-u.css';
import '../../css/g/g7_--dwga.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b40784e-u"/><path class="g7_--dwga"/>`,
		"fallback": "streamline-pixel:interface-essential-expand-2",
	});
}

export default Component;
