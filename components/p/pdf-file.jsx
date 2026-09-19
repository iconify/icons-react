import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yal-1qa0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yal-1qa0c"/>`,
		"fallback": "griddy-icons:pdf-file",
	});
}

export default Component;
