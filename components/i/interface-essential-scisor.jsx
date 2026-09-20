import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glxlc_bpl.css';
import '../../css/a/a2gr9fb-b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glxlc_bpl"/><path class="a2gr9fb-b"/>`,
		"fallback": "streamline-pixel:interface-essential-scisor",
	});
}

export default Component;
