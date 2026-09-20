import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9xy5yb9r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v9xy5yb9r"/>`,
		"fallback": "streamline-plump:sizing-solid",
	});
}

export default Component;
