import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh4amcbgg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh4amcbgg"/>`,
		"fallback": "ant-design:partition",
	});
}

export default Component;
