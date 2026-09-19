import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzh3pe_2x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzh3pe_2x"/>`,
		"fallback": "dinkie-icons:language-thai",
	});
}

export default Component;
