import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc6mpdb9z.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc6mpdb9z"/>`,
		"fallback": "jam:pinterest",
	});
}

export default Component;
