import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge9yvibnh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge9yvibnh"/>`,
		"fallback": "fluent-mdl2:street",
	});
}

export default Component;
