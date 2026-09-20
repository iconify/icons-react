import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnvdesbnf.css';
import '../../css/u/ur9gklu2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnvdesbnf"/><path class="ur9gklu2q"/>`,
		"fallback": "streamline-ultimate:task-list-approve-bold",
	});
}

export default Component;
