import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-m_ziyof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-m_ziyof"/>`,
		"fallback": "thesvg-color:nodegui",
	});
}

export default Component;
