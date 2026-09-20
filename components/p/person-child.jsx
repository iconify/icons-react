import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf4pigb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf4pigb2w"/>`,
		"fallback": "mdi:person-child",
	});
}

export default Component;
