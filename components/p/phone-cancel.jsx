import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w76g3kfom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w76g3kfom"/>`,
		"fallback": "mage:phone-cancel",
	});
}

export default Component;
