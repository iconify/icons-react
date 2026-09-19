import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbg954-7b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbg954-7b"/>`,
		"fallback": "dinkie-icons:scales",
	});
}

export default Component;
