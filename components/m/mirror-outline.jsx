import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuap8sbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nuap8sbjc"/>`,
		"fallback": "solar:mirror-outline",
	});
}

export default Component;
