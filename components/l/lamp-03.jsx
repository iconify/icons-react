import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzn5g7ntz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzn5g7ntz"/>`,
		"fallback": "hugeicons:lamp-03",
	});
}

export default Component;
