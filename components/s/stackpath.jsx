import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrra9ebrq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrra9ebrq"/>`,
		"fallback": "fa7-brands:stackpath",
	});
}

export default Component;
