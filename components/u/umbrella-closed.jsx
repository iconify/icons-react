import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruerrnw3q.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruerrnw3q"/>`,
		"fallback": "jam:umbrella-closed",
	});
}

export default Component;
