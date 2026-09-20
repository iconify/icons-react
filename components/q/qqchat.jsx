import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7n8lldwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7n8lldwk"/>`,
		"fallback": "mdi:qqchat",
	});
}

export default Component;
