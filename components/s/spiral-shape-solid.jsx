import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrkuoq-rx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wrkuoq-rx"/>`,
		"fallback": "streamline-plump:spiral-shape-solid",
	});
}

export default Component;
