import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4azuyx3n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4azuyx3n"/>`,
		"fallback": "ant-design:pinterest-filled",
	});
}

export default Component;
