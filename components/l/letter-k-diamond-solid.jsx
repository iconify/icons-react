import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx3n_tb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx3n_tb2p"/>`,
		"fallback": "mynaui:letter-k-diamond-solid",
	});
}

export default Component;
