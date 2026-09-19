import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mquy8vb0l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mquy8vb0l"/>`,
		"fallback": "cib:pingup",
	});
}

export default Component;
