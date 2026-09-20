import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdwk-ga1f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdwk-ga1f"/>`,
		"fallback": "octicon:undo-16",
	});
}

export default Component;
