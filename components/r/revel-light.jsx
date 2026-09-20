import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygcac9taj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygcac9taj"/>`,
		"fallback": "selfhst:revel-light",
	});
}

export default Component;
