import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5a6n0a1d.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5a6n0a1d"/>`,
		"fallback": "picon:swift",
	});
}

export default Component;
