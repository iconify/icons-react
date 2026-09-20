import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5a3ny35e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d5a3ny35e"/>`,
		"fallback": "streamline-plump:waving-hand-solid",
	});
}

export default Component;
