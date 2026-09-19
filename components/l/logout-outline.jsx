import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf0xsld2l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf0xsld2l"/>`,
		"fallback": "ant-design:logout-outline",
	});
}

export default Component;
