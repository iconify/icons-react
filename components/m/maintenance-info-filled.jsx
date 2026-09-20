import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtd4wbceg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gtd4wbceg"/>`,
		"fallback": "ix:maintenance-info-filled",
	});
}

export default Component;
