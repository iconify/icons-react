import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhus0yb_a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhus0yb_a"/>`,
		"fallback": "ant-design:star-filled",
	});
}

export default Component;
