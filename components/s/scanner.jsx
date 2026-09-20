import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejccd-dpw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejccd-dpw"/>`,
		"fallback": "streamline-flex-color:scanner",
	});
}

export default Component;
