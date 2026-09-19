import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcw0tzvsc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fcw0tzvsc"/>`,
		"fallback": "healthicons:k",
	});
}

export default Component;
