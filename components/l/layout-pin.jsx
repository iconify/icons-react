import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_m_r1b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_m_r1b2q"/>`,
		"fallback": "gg:layout-pin",
	});
}

export default Component;
