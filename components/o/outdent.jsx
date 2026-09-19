import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2iw6y11v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2iw6y11v"/>`,
		"fallback": "icons8:outdent",
	});
}

export default Component;
