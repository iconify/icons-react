import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5os27n7z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5os27n7z"/>`,
		"fallback": "icomoon-free:spinner7",
	});
}

export default Component;
