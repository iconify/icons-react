import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu4c-gk5y.css';
import '../../css/b/b76l5ee_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu4c-gk5y"/><path class="b76l5ee_n"/>`,
		"fallback": "streamline-freehand:safety-sign-electricity",
	});
}

export default Component;
