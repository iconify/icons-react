import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1ih2ynva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1ih2ynva"/>`,
		"fallback": "simple-icons:mariadb",
	});
}

export default Component;
