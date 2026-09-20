import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlmk6mb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlmk6mb2v"/>`,
		"fallback": "token:propc",
	});
}

export default Component;
