import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjcdi0bfl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjcdi0bfl"/>`,
		"fallback": "selfhst:oxicloud-dark",
	});
}

export default Component;
