import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gngl3-dav.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gngl3-dav"/>`,
		"fallback": "devicon-plain:subversion-wordmark",
	});
}

export default Component;
