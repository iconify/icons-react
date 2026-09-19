import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkq5-0cbt.css';

const viewBox = {"width":1025,"height":770};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkq5-0cbt"/>`,
		"fallback": "whh:panoramaalt",
	});
}

export default Component;
