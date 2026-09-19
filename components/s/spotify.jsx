import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc6t70b8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc6t70b8k"/>`,
		"fallback": "entypo-social:spotify",
	});
}

export default Component;
