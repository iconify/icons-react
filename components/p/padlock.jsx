import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqvdm-b2t.css';
import '../../css/m/m_u6hpbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqvdm-b2t"/><path class="m_u6hpbzc"/>`,
		"fallback": "uim:padlock",
	});
}

export default Component;
