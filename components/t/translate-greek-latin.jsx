import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_7ttr2sn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_7ttr2sn"/>`,
		"fallback": "dinkie-icons:translate-greek-latin",
	});
}

export default Component;
