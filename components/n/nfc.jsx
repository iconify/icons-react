import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqzmw3r4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqzmw3r4f"/>`,
		"fallback": "hugeicons:nfc",
	});
}

export default Component;
