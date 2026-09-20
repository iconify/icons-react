import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4m3u2mna.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4m3u2mna"/>`,
		"fallback": "picon:unindent",
	});
}

export default Component;
