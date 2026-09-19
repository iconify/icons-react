import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elaoyvwug.css';
import '../../css/q/qre15k4lx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elaoyvwug"/><path class="qre15k4lx"/>`,
		"fallback": "catppuccin:squirrel",
	});
}

export default Component;
