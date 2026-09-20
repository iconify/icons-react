import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihnb7ebwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihnb7ebwe"/>`,
		"fallback": "tabler:pencil-bolt",
	});
}

export default Component;
