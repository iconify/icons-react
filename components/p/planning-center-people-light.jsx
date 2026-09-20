import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it2cgzg4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it2cgzg4m"/>`,
		"fallback": "selfhst:planning-center-people-light",
	});
}

export default Component;
