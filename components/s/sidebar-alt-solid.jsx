import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_vskm2fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_vskm2fc"/>`,
		"fallback": "mynaui:sidebar-alt-solid",
	});
}

export default Component;
