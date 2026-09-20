import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo_psbbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo_psbbmd"/>`,
		"fallback": "ri:pixelfed-fill",
	});
}

export default Component;
