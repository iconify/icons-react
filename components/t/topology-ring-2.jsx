import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkrm66bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkrm66bda"/>`,
		"fallback": "tabler:topology-ring-2",
	});
}

export default Component;
