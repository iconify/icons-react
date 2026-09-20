import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omllgdbsn.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omllgdbsn"/>`,
		"fallback": "jam:redo",
	});
}

export default Component;
