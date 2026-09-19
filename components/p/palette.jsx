import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn7bfp_tc.css';
import '../../css/t/tfentzbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn7bfp_tc"/><circle class="tfentzbbu"/>`,
		"fallback": "circum:palette",
	});
}

export default Component;
