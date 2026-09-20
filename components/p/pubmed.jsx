import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmar4pbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmar4pbym"/>`,
		"fallback": "simple-icons:pubmed",
	});
}

export default Component;
