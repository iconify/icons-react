import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9lipul9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9lipul9f"/>`,
		"fallback": "file-icons:shen",
	});
}

export default Component;
