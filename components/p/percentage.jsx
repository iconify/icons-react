import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hydl6x73v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hydl6x73v"/>`,
		"fallback": "ant-design:percentage",
	});
}

export default Component;
