import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6m_etbor.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6m_etbor"/>`,
		"fallback": "ant-design:italic-outline",
	});
}

export default Component;
