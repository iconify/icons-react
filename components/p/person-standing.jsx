import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz0zt2bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz0zt2bpu"/>`,
		"fallback": "vadivam:person-standing",
	});
}

export default Component;
