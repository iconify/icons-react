import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1gj2m_4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1gj2m_4m"/>`,
		"fallback": "coolicons:table-minus-corner-round",
	});
}

export default Component;
