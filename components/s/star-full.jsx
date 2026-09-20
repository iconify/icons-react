import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1cgk460p.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1cgk460p"/>`,
		"fallback": "jam:star-full",
	});
}

export default Component;
