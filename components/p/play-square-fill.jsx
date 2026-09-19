import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx80fdgqt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx80fdgqt"/>`,
		"fallback": "ant-design:play-square-fill",
	});
}

export default Component;
