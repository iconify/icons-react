import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leg-t8bwn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leg-t8bwn"/>`,
		"fallback": "ant-design:mail-outlined",
	});
}

export default Component;
