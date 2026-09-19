import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac9g9w62l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac9g9w62l"/>`,
		"fallback": "devicon-plain:scikitlearn",
	});
}

export default Component;
