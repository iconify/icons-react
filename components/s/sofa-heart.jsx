import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl9aqubvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl9aqubvn"/>`,
		"fallback": "noviair:sofa-heart",
	});
}

export default Component;
