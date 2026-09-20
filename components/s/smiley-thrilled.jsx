import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es0y-zp9y.css';
import '../../css/p/po5fh-7sr.css';
import '../../css/c/cwoolsbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es0y-zp9y"/><path class="po5fh-7sr"/><path class="cwoolsbqo"/>`,
		"fallback": "streamline-freehand:smiley-thrilled",
	});
}

export default Component;
