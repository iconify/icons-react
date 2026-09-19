import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol2-_5b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ol2-_5b7m"/>`,
		"fallback": "gg:twitter",
	});
}

export default Component;
