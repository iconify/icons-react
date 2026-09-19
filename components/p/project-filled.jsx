import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl4ux5b9x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl4ux5b9x"/>`,
		"fallback": "ant-design:project-filled",
	});
}

export default Component;
