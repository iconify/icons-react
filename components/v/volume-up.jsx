import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_080nbsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m_080nbsv"/>`,
		"fallback": "heroicons-solid:volume-up",
	});
}

export default Component;
