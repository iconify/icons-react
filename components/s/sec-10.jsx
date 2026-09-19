import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_ozbwbzg.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_ozbwbzg"/>`,
		"fallback": "zmdi:sec-10",
	});
}

export default Component;
