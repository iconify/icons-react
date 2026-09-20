import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxpe5mb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxpe5mb8d"/>`,
		"fallback": "tabler:navigation-code",
	});
}

export default Component;
