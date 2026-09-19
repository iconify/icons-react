import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h482tac2h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h482tac2h"/>`,
		"fallback": "ant-design:tablet-filled",
	});
}

export default Component;
