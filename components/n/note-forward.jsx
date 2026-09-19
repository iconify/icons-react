import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8romb68f.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8romb68f"/>`,
		"fallback": "fluent-mdl2:note-forward",
	});
}

export default Component;
