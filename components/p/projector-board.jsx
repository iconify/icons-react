import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4a006b9m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4a006b9m"/>`,
		"fallback": "streamline:projector-board",
	});
}

export default Component;
