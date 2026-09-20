import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq6m08ces.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gq6m08ces"/>`,
		"fallback": "streamline-plump:password-lock-solid",
	});
}

export default Component;
