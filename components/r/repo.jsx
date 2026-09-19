import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi240emrf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi240emrf"/>`,
		"fallback": "codicon:repo",
	});
}

export default Component;
