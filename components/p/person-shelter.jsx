import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inwhr0bta.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inwhr0bta"/>`,
		"fallback": "fa7-solid:person-shelter",
	});
}

export default Component;
