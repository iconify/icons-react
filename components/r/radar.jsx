import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhj_6240a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhj_6240a"/>`,
		"fallback": "whh:radar",
	});
}

export default Component;
