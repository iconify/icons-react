import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9j5sz1kq.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9j5sz1kq"/>`,
		"fallback": "whh:screw",
	});
}

export default Component;
