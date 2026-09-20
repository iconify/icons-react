import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmrsz7b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmrsz7b0b"/>`,
		"fallback": "tabler:number-19-small",
	});
}

export default Component;
