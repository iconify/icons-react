import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql-63ojvj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql-63ojvj"/>`,
		"fallback": "ep:video-pause",
	});
}

export default Component;
