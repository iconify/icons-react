import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba19-vb0g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba19-vb0g"/>`,
		"fallback": "la:memory",
	});
}

export default Component;
