import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_fiq-zyj.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_fiq-zyj"/>`,
		"fallback": "whh:microscope",
	});
}

export default Component;
