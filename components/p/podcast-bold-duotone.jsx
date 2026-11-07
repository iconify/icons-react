import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/newyx7bgu.css';
import '../../css/l/lzldlfb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="newyx7bgu"/><path class="lzldlfb0v"/>`,
		"fallback": "solar:podcast-bold-duotone",
	});
}

export default Component;
