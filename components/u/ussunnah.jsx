import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aij4m_rjy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aij4m_rjy"/>`,
		"fallback": "la:ussunnah",
	});
}

export default Component;
