import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu2gm9baa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu2gm9baa"/>`,
		"fallback": "icomoon-free:lab",
	});
}

export default Component;
