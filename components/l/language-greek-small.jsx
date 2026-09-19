import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc2ln7gjs.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc2ln7gjs"/>`,
		"fallback": "dinkie-icons:language-greek-small",
	});
}

export default Component;
