import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg4w-xbmv.css';

const viewBox = {"width":440,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg4w-xbmv"/>`,
		"fallback": "file-icons:virtualbox",
	});
}

export default Component;
