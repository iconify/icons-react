import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbc_a30nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbc_a30nj"/>`,
		"fallback": "eva:umbrella-fill",
	});
}

export default Component;
