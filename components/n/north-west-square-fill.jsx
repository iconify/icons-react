import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi8hw16yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wi8hw16yc"/>`,
		"fallback": "si:north-west-square-fill",
	});
}

export default Component;
