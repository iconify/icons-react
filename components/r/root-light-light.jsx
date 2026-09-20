import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bajjv5bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bajjv5bxn"/>`,
		"fallback": "lets-icons:root-light-light",
	});
}

export default Component;
