import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqkmd_7zr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqkmd_7zr"/>`,
		"fallback": "reicon:link-broken2",
	});
}

export default Component;
