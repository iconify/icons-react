import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us5-5pbfa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="us5-5pbfa"/>`,
		"fallback": "streamline-plump:log-remix",
	});
}

export default Component;
