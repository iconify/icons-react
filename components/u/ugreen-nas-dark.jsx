import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvcj8vpcq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvcj8vpcq"/>`,
		"fallback": "selfhst:ugreen-nas-dark",
	});
}

export default Component;
