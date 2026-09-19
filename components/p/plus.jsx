import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rea25db9l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rea25db9l"/>`,
		"fallback": "icons8:plus",
	});
}

export default Component;
