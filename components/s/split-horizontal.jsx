import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igm5djhgz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igm5djhgz"/>`,
		"fallback": "codicon:split-horizontal",
	});
}

export default Component;
