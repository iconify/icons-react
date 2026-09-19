import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx76tdlhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx76tdlhm"/>`,
		"fallback": "ci:refresh",
	});
}

export default Component;
