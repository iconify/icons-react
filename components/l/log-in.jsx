import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohee2bcad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohee2bcad"/>`,
		"fallback": "ix:log-in",
	});
}

export default Component;
