import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7279xbqj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z7279xbqj"/>`,
		"fallback": "streamline-plump:visual-blind-remix",
	});
}

export default Component;
