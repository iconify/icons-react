import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auf8n_bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auf8n_bsy primary"/>`,
		"fallback": "iconaut:scan-duotone",
	});
}

export default Component;
