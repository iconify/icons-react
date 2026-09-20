import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqazarbmw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqazarbmw"/>`,
		"fallback": "streamline:qr-code",
	});
}

export default Component;
