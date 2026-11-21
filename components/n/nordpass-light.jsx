import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfk3ccctu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfk3ccctu"/>`,
		"fallback": "selfhst:nordpass-light",
	});
}

export default Component;
