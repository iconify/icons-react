import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3z55bfbo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3z55bfbo"/>`,
		"fallback": "pinhead:phone-top-right-and-question-mark",
	});
}

export default Component;
