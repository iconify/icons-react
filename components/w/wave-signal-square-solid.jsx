import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9-2swyic.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o9-2swyic"/>`,
		"fallback": "streamline-plump:wave-signal-square-solid",
	});
}

export default Component;
