import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0t33gbpd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i0t33gbpd"/>`,
		"fallback": "streamline:upload-computer-solid",
	});
}

export default Component;
