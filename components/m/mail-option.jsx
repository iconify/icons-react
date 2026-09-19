import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxt7gwb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxt7gwb1b"/>`,
		"fallback": "grommet-icons:mail-option",
	});
}

export default Component;
