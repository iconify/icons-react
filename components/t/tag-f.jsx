import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7kmtli8l.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7kmtli8l"/>`,
		"fallback": "jam:tag-f",
	});
}

export default Component;
