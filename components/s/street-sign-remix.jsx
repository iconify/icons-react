import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9x6irbsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g9x6irbsb"/>`,
		"fallback": "streamline-plump:street-sign-remix",
	});
}

export default Component;
