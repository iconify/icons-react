import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qit8fdbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qit8fdbbk"/>`,
		"fallback": "pixelarticons:pc-case-sharp",
	});
}

export default Component;
