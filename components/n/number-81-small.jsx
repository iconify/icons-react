import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhshgg65e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhshgg65e"/>`,
		"fallback": "tabler:number-81-small",
	});
}

export default Component;
