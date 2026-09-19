import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnzb1c__m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnzb1c__m"/>`,
		"fallback": "fontisto:oracle",
	});
}

export default Component;
