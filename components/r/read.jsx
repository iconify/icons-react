import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se8m_e3yt.css';
import '../../css/h/hp28okb8j.css';
import '../../css/z/z040k9bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se8m_e3yt"/><path class="hp28okb8j"/><circle class="z040k9bvo"/>`,
		"fallback": "circum:read",
	});
}

export default Component;
