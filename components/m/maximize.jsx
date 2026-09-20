import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp6y7hsco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp6y7hsco"/>`,
		"fallback": "ix:maximize",
	});
}

export default Component;
