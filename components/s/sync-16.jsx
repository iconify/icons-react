import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krsjxac7j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krsjxac7j"/>`,
		"fallback": "octicon:sync-16",
	});
}

export default Component;
