import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbtuw1bio.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbtuw1bio"/>`,
		"fallback": "whh:skypeoffline",
	});
}

export default Component;
