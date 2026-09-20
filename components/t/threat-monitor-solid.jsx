import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baljw1b8t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="baljw1b8t"/>`,
		"fallback": "streamline-flex:threat-monitor-solid",
	});
}

export default Component;
