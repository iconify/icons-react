import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npn7ripfg.css';
import '../../css/f/fonv89syi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="npn7ripfg"/><path class="fonv89syi"/>`,
		"fallback": "qlementine-icons:microphone-old-16",
	});
}

export default Component;
