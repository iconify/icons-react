import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brt7te-9q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brt7te-9q"/>`,
		"fallback": "ant-design:stop",
	});
}

export default Component;
