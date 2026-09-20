import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0dhspbqm.css';

const viewBox = {"width":18,"height":18};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0dhspbqm"/>`,
		"fallback": "jam:unlink",
	});
}

export default Component;
