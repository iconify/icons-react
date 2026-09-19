import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzbaq923d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzbaq923d"/>`,
		"fallback": "ant-design:shopping-outline",
	});
}

export default Component;
