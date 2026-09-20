import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbg5zkbhp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbg5zkbhp"/>`,
		"fallback": "material-icon-theme:mojo",
	});
}

export default Component;
