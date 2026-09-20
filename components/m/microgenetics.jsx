import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py3qm5roi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py3qm5roi"/>`,
		"fallback": "simple-icons:microgenetics",
	});
}

export default Component;
