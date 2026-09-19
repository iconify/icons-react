import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuwlt3xsy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuwlt3xsy"/>`,
		"fallback": "ant-design:slack-circle-filled",
	});
}

export default Component;
