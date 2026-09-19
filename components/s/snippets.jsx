import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw0ks3bmh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw0ks3bmh"/>`,
		"fallback": "ant-design:snippets",
	});
}

export default Component;
