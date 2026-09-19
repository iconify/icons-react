import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t92wowb3v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t92wowb3v"/>`,
		"fallback": "dinkie-icons:railway-car",
	});
}

export default Component;
