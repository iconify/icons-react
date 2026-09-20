import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8ve7ebjh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8ve7ebjh"/>`,
		"fallback": "selfhst:requestrr-light",
	});
}

export default Component;
