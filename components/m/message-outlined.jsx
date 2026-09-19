import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgi3klbbz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgi3klbbz"/>`,
		"fallback": "ant-design:message-outlined",
	});
}

export default Component;
