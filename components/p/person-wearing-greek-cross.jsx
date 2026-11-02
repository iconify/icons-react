import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjl3xd-zr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjl3xd-zr"/>`,
		"fallback": "pinhead:person-wearing-greek-cross",
	});
}

export default Component;
