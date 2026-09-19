import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp3q74byz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp3q74byz"/>`,
		"fallback": "file-icons:mono",
	});
}

export default Component;
