import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uedkzf-5g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="uedkzf-5g"/>`,
		"fallback": "grommet-icons:status-info-small",
	});
}

export default Component;
