import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgkl83cth.css';

const viewBox = {"width":447,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgkl83cth"/>`,
		"fallback": "file-icons:scrutinizer",
	});
}

export default Component;
