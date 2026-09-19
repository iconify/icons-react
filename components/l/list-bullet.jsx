import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr7_cdb4b.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr7_cdb4b"/>`,
		"fallback": "f7:list-bullet",
	});
}

export default Component;
