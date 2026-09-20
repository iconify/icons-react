import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh4ts9bip.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh4ts9bip"/>`,
		"fallback": "streamline-flex:phone-solid",
	});
}

export default Component;
