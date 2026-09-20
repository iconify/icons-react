import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs47u9j4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs47u9j4i"/>`,
		"fallback": "tdesign:pen-brush-filled",
	});
}

export default Component;
