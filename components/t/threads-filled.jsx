import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1sol0n2q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1sol0n2q"/>`,
		"fallback": "ant-design:threads-filled",
	});
}

export default Component;
