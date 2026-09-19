import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm7w5bbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm7w5bbqy"/>`,
		"fallback": "cbi:pool-clorine",
	});
}

export default Component;
