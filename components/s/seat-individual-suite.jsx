import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kftv5qb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kftv5qb1w"/>`,
		"fallback": "mdi:seat-individual-suite",
	});
}

export default Component;
