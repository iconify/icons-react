import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv2fgj7zw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv2fgj7zw"/>`,
		"fallback": "octicon:versions-16",
	});
}

export default Component;
