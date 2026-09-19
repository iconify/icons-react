import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk0zd1b8d.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk0zd1b8d"/>`,
		"fallback": "fa:train",
	});
}

export default Component;
