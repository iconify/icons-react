import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3t-g3ebi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3t-g3ebi"/>`,
		"fallback": "streamline-flex:screen-curve-solid",
	});
}

export default Component;
