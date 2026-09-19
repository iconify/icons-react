import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr5z6m_rl.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr5z6m_rl"/>`,
		"fallback": "zmdi:landscape",
	});
}

export default Component;
