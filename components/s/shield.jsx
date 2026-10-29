import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd9e8th7d.css';
import '../../css/b/b0w0zoqxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd9e8th7d"/><path class="b0w0zoqxq"/>`,
		"fallback": "withicons-bauhaus:shield",
	});
}

export default Component;
