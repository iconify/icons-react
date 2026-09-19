import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpe64o2wm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpe64o2wm"/>`,
		"fallback": "dinkie-icons:speaker",
	});
}

export default Component;
