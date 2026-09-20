import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idjro8bwj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idjro8bwj"/>`,
		"fallback": "lsicon:unlink-outline",
	});
}

export default Component;
