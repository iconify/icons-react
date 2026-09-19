import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tna4p3b0g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tna4p3b0g"/>`,
		"fallback": "ant-design:slack-square",
	});
}

export default Component;
