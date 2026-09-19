import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgp4nsy0v.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgp4nsy0v"/>`,
		"fallback": "fa-solid:tenge",
	});
}

export default Component;
