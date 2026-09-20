import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzisgdc9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzisgdc9f"/>`,
		"fallback": "simple-icons:langchain",
	});
}

export default Component;
