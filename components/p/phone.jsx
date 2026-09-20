import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgo1esxop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rgo1esxop"/>`,
		"fallback": "reicon:phone",
	});
}

export default Component;
