import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dujmnu_mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dujmnu_mn"/>`,
		"fallback": "lets-icons:vertical-switch-long",
	});
}

export default Component;
