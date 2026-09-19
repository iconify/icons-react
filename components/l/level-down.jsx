import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkpangb-u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkpangb-u"/>`,
		"fallback": "icons8:level-down",
	});
}

export default Component;
