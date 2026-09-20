import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzksm6bin.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzksm6bin"/>`,
		"fallback": "simple-line-icons:social-dropbox",
	});
}

export default Component;
