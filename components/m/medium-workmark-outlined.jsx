import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emn7phbbs.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emn7phbbs"/>`,
		"fallback": "ant-design:medium-workmark-outlined",
	});
}

export default Component;
