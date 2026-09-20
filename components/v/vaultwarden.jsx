import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnl7xcbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnl7xcbqh"/>`,
		"fallback": "thesvg-color:vaultwarden",
	});
}

export default Component;
