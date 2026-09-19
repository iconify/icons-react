import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_szxhbqb.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_szxhbqb"/>`,
		"fallback": "fontisto:onenote",
	});
}

export default Component;
