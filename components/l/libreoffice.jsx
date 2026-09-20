import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqt0ixggp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqt0ixggp"/>`,
		"fallback": "thesvg-color:libreoffice",
	});
}

export default Component;
