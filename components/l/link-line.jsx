import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfx4sq3sa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfx4sq3sa"/>`,
		"fallback": "si:link-line",
	});
}

export default Component;
