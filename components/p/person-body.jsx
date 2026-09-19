import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vowu4hbmp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vowu4hbmp"/>`,
		"fallback": "at-icons:person-body",
	});
}

export default Component;
