import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz90awb-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xz90awb-o"/>`,
		"fallback": "reicon:square-arrows-down",
	});
}

export default Component;
