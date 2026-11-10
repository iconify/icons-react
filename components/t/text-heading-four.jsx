import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwy545bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwy545bgt"/>`,
		"fallback": "andrsrxn:text-heading-four",
	});
}

export default Component;
