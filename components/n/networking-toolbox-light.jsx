import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi221rtgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi221rtgo"/>`,
		"fallback": "selfhst:networking-toolbox-light",
	});
}

export default Component;
