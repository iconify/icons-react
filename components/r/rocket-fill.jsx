import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upk9p4bap.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upk9p4bap"/>`,
		"fallback": "ant-design:rocket-fill",
	});
}

export default Component;
