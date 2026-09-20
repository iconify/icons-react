import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnk53dbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnk53dbzv"/>`,
		"fallback": "lineicons:javascript",
	});
}

export default Component;
