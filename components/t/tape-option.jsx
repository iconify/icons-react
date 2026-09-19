import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/row95eb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="row95eb5x"/>`,
		"fallback": "grommet-icons:tape-option",
	});
}

export default Component;
