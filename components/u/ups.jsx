import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm8445ilo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm8445ilo"/>`,
		"fallback": "simple-icons:ups",
	});
}

export default Component;
