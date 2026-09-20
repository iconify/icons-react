import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfh8tn-5h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gfh8tn-5h"/>`,
		"fallback": "streamline:scanner-solid",
	});
}

export default Component;
