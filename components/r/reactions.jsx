import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afp0twpdw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afp0twpdw"/>`,
		"fallback": "codicon:reactions",
	});
}

export default Component;
