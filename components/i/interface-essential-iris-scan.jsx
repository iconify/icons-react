import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msr53udzy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msr53udzy"/>`,
		"fallback": "streamline-pixel:interface-essential-iris-scan",
	});
}

export default Component;
