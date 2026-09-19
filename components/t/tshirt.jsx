import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_0vobhrh.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_0vobhrh"/>`,
		"fallback": "fa-solid:tshirt",
	});
}

export default Component;
