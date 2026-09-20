import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erl6f0bwt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="erl6f0bwt"/>`,
		"fallback": "streamline-plump:pyramid-shape-remix",
	});
}

export default Component;
