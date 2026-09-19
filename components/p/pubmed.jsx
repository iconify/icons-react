import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u705g9uxm.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u705g9uxm"/>`,
		"fallback": "academicons:pubmed",
	});
}

export default Component;
