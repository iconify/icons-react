import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6-m_kb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o6-m_kb3x"/>`,
		"fallback": "solar:vanity-outline",
	});
}

export default Component;
