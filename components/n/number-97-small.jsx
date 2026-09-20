import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhtex-0zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhtex-0zk"/>`,
		"fallback": "tabler:number-97-small",
	});
}

export default Component;
