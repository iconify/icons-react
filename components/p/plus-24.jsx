import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5tjuwali.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5tjuwali"/>`,
		"fallback": "qlementine-icons:plus-24",
	});
}

export default Component;
