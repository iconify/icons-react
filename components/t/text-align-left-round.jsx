import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyy8nwb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyy8nwb5f"/>`,
		"fallback": "coolicons:text-align-left-round",
	});
}

export default Component;
