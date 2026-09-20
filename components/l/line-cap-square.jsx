import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jij_-4p-a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jij_-4p-a"/>`,
		"fallback": "ix:line-cap-square",
	});
}

export default Component;
