import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky3hg7kgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky3hg7kgu"/>`,
		"fallback": "file-icons:kusto",
	});
}

export default Component;
