import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3u-g3b9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3u-g3b9s"/>`,
		"fallback": "octicon:iterations-16",
	});
}

export default Component;
