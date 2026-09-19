import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyam1zhwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyam1zhwf"/>`,
		"fallback": "ion:trophy-sharp",
	});
}

export default Component;
