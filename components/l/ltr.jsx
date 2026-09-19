import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly93z8bzp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly93z8bzp"/>`,
		"fallback": "icomoon-free:ltr",
	});
}

export default Component;
