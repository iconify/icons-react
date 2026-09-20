import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqm3uvblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqm3uvblp"/>`,
		"fallback": "simple-icons:securityscorecard",
	});
}

export default Component;
