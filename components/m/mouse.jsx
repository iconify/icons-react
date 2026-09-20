import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfy74gbpy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfy74gbpy"/>`,
		"fallback": "simple-line-icons:mouse",
	});
}

export default Component;
