import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah4fjlb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah4fjlb_f"/>`,
		"fallback": "cbi:lightstrip-wrap",
	});
}

export default Component;
