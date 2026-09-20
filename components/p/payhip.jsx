import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs9vhp30b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs9vhp30b"/>`,
		"fallback": "simple-icons:payhip",
	});
}

export default Component;
