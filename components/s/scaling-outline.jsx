import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_wdj5b3k.css';
import '../../css/t/t4y5-pbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_wdj5b3k"/><path class="t4y5-pbqq"/>`,
		"fallback": "solar:scaling-outline",
	});
}

export default Component;
