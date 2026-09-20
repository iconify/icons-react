import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxv8r8b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxv8r8b3c"/>`,
		"fallback": "tabler:topology-bus",
	});
}

export default Component;
