import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o40ncj9os.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o40ncj9os"/>`,
		"fallback": "la:osi",
	});
}

export default Component;
