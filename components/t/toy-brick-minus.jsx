import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgcdr68to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgcdr68to"/>`,
		"fallback": "mdi:toy-brick-minus",
	});
}

export default Component;
