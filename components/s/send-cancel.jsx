import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnyr25b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnyr25b1f"/>`,
		"fallback": "tdesign:send-cancel",
	});
}

export default Component;
