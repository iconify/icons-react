import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq-sgi9nm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mq-sgi9nm"/>`,
		"fallback": "lsicon:leaf-filled",
	});
}

export default Component;
