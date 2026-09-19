import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-nwy9zre.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c-nwy9zre"/>`,
		"fallback": "icon-park:market",
	});
}

export default Component;
