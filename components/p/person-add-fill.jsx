import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgbqm5b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgbqm5b_u"/>`,
		"fallback": "eva:person-add-fill",
	});
}

export default Component;
