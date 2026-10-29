import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obvmtpyhu.css';
import '../../css/t/tqpyvlb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obvmtpyhu wm-k"/><path class="tqpyvlb9z wm-a"/>`,
		"fallback": "withicons-bauhaus:underline",
	});
}

export default Component;
