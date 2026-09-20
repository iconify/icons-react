import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ary8e2ekk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ary8e2ekk"/>`,
		"fallback": "ix:microphone",
	});
}

export default Component;
