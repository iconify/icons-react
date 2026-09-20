import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg1ooc8-y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg1ooc8-y"/>`,
		"fallback": "selfhst:planning-center-church-center-light",
	});
}

export default Component;
