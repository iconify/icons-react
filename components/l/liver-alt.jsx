import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8i7obbah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v8i7obbah"/>`,
		"fallback": "healthicons:liver-alt",
	});
}

export default Component;
