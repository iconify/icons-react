import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvfgo8b0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvfgo8b0x"/>`,
		"fallback": "ix:play-stepwise-filled",
	});
}

export default Component;
