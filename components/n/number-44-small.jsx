import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw_cqjble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw_cqjble"/>`,
		"fallback": "tabler:number-44-small",
	});
}

export default Component;
