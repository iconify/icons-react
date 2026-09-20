import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owd89xb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owd89xb1n"/>`,
		"fallback": "tabler:square-rotated-forbid-2",
	});
}

export default Component;
