import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymg_n841n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymg_n841n"/>`,
		"fallback": "ant-design:replicate-filled",
	});
}

export default Component;
