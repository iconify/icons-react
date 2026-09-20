import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inyjtvbyv.css';
import '../../css/n/nj154lb5h.css';
import '../../css/a/ab82--bjb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inyjtvbyv"/><path class="nj154lb5h"/><path class="ab82--bjb"/>`,
		"fallback": "streamline-pixel:interface-essential-expand-3",
	});
}

export default Component;
