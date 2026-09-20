import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buc8bcb-i.css';

const viewBox = {"width":24,"height":24,"left":-8,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buc8bcb-i"/>`,
		"fallback": "jam:torch-f",
	});
}

export default Component;
