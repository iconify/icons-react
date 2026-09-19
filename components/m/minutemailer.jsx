import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8n3hpqxx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8n3hpqxx"/>`,
		"fallback": "cib:minutemailer",
	});
}

export default Component;
