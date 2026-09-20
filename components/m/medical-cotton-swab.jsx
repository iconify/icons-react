import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf_5pebtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf_5pebtg"/>`,
		"fallback": "mdi:medical-cotton-swab",
	});
}

export default Component;
