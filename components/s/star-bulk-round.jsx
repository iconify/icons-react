import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s06ujyb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s06ujyb0o"/>`,
		"fallback": "coolicons:star-bulk-round",
	});
}

export default Component;
