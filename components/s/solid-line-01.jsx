import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhc5occtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhc5occtw"/>`,
		"fallback": "hugeicons:solid-line-01",
	});
}

export default Component;
