import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n01jmhb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n01jmhb7q"/>`,
		"fallback": "reicon:message2",
	});
}

export default Component;
