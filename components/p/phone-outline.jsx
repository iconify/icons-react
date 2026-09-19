import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b26cuwy7g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b26cuwy7g"/>`,
		"fallback": "ant-design:phone-outline",
	});
}

export default Component;
