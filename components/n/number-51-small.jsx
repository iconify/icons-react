import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixpidxb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixpidxb6q"/>`,
		"fallback": "tabler:number-51-small",
	});
}

export default Component;
