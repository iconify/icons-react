import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og7y7jbvw.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og7y7jbvw"/>`,
		"fallback": "jam:tree-alt-f",
	});
}

export default Component;
