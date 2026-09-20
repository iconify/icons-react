import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auiwbcdbq.css';
import '../../css/x/xafj45btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auiwbcdbq"/><path class="xafj45btt"/>`,
		"fallback": "token:lunc",
	});
}

export default Component;
