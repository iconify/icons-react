import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlkeh4btk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlkeh4btk"/>`,
		"fallback": "thesvg-color:phind",
	});
}

export default Component;
