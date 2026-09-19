import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4mag820m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4mag820m"/>`,
		"fallback": "f7:person-crop-rectangle",
	});
}

export default Component;
