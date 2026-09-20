import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrgf5g66q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrgf5g66q"/>`,
		"fallback": "tabler:number-91-small",
	});
}

export default Component;
