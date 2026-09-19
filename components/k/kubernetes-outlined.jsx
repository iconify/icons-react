import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljaw0iz7g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljaw0iz7g"/>`,
		"fallback": "ant-design:kubernetes-outlined",
	});
}

export default Component;
