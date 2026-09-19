import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1m_geb7p.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1m_geb7p"/>`,
		"fallback": "fa6-solid:users-rays",
	});
}

export default Component;
