import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neohn4bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neohn4bis"/>`,
		"fallback": "streamline-ultimate:volume-control-up-1",
	});
}

export default Component;
