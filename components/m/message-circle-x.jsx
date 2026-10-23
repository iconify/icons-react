import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc3w0nb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc3w0nb0j"/>`,
		"fallback": "vadivam:message-circle-x",
	});
}

export default Component;
