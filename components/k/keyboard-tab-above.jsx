import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jynczeb_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jynczeb_d"/>`,
		"fallback": "codicon:keyboard-tab-above",
	});
}

export default Component;
