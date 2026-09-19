import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz6-5w-0c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz6-5w-0c"/>`,
		"fallback": "ant-design:setting",
	});
}

export default Component;
