import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsi_ej0qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsi_ej0qh"/>`,
		"fallback": "vadivam:user-round-x",
	});
}

export default Component;
