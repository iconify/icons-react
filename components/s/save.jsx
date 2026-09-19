import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jho-fuw1m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jho-fuw1m"/>`,
		"fallback": "codicon:save",
	});
}

export default Component;
