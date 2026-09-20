import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwof9_rjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwof9_rjo"/>`,
		"fallback": "typcn:key",
	});
}

export default Component;
