import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddnwvge2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ddnwvge2j"/>`,
		"fallback": "streamline-plump:voice-scan-1-solid",
	});
}

export default Component;
