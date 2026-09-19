import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj7bijbti.css';
import '../../css/j/jsfpydcpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj7bijbti"/><path class="jsfpydcpi"/>`,
		"fallback": "bxl:medium-square",
	});
}

export default Component;
