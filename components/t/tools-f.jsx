import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5qn53n-c.css';

const viewBox = {"width":24,"height":24,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5qn53n-c"/>`,
		"fallback": "jam:tools-f",
	});
}

export default Component;
