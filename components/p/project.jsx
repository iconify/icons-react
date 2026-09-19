import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1a3blbpw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1a3blbpw"/>`,
		"fallback": "ant-design:project",
	});
}

export default Component;
