import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldsgrbc8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldsgrbc8v"/>`,
		"fallback": "mdi:source-branch-minus",
	});
}

export default Component;
