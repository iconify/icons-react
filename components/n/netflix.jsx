import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn1wrwb7q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn1wrwb7q"/>`,
		"fallback": "picon:netflix",
	});
}

export default Component;
