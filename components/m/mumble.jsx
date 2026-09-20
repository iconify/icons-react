import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqxf8yvyj.css';
import '../../css/f/ffqw7f7px.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqxf8yvyj"/><path class="ffqw7f7px"/>`,
		"fallback": "selfhst:mumble",
	});
}

export default Component;
