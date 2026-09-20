import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buaak1vby.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buaak1vby"/>`,
		"fallback": "jam:keyboard",
	});
}

export default Component;
