import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbi7kmqhc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbi7kmqhc"/>`,
		"fallback": "dinkie-icons:right-magnifying-glass-small-filled",
	});
}

export default Component;
