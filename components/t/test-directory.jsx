import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pme5qfb2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pme5qfb2q"/>`,
		"fallback": "file-icons:test-directory",
	});
}

export default Component;
