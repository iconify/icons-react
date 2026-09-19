import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drqqs-5cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="drqqs-5cc"/>`,
		"fallback": "iconoir:litecoin-circle-solid",
	});
}

export default Component;
