import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgu_3ibqf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgu_3ibqf"/>`,
		"fallback": "dinkie-icons:podium",
	});
}

export default Component;
