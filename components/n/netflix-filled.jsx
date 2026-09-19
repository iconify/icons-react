import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6i7a1tli.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6i7a1tli"/>`,
		"fallback": "ant-design:netflix-filled",
	});
}

export default Component;
