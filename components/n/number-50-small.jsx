import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd6a3bk_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd6a3bk_g"/>`,
		"fallback": "tabler:number-50-small",
	});
}

export default Component;
