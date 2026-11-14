import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whdlzbczh.css';
import '../../css/v/vas3oxb4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whdlzbczh"/><path class="vas3oxb4y"/>`,
		"fallback": "selfhst:operately-light",
	});
}

export default Component;
