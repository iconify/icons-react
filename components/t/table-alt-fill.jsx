import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnl2zkb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnl2zkb7x"/>`,
		"fallback": "ri:table-alt-fill",
	});
}

export default Component;
