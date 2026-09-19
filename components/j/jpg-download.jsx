import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ady3sabzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ady3sabzj"/>`,
		"fallback": "griddy-icons:jpg-download",
	});
}

export default Component;
