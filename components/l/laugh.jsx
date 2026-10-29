import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utqzt6bcp.css';
import '../../css/g/g1pjbqb5c.css';
import '../../css/q/qrntc0b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utqzt6bcp wm-k"/><path class="g1pjbqb5c wm-a"/><path class="qrntc0b5o wm-a"/>`,
		"fallback": "withicons-bauhaus:laugh",
	});
}

export default Component;
