import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6s2--bkt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6s2--bkt"/>`,
		"fallback": "dinkie-icons:red-apple",
	});
}

export default Component;
