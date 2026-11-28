import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwv2r1bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwv2r1bnq"/>`,
		"fallback": "iconaut:stairs-solid",
	});
}

export default Component;
