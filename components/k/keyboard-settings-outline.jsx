import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a814tqb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a814tqb5n"/>`,
		"fallback": "mdi:keyboard-settings-outline",
	});
}

export default Component;
