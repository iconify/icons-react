import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzzrj50-j.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzzrj50-j"/>`,
		"fallback": "f7:sun-max-fill",
	});
}

export default Component;
