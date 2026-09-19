import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hib7cacbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hib7cacbk"/>`,
		"fallback": "ci:select-multiple",
	});
}

export default Component;
