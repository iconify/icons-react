import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgjmc8bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgjmc8bpl"/>`,
		"fallback": "thesvg-color:nrwl",
	});
}

export default Component;
