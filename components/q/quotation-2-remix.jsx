import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjag9ebpt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yjag9ebpt"/>`,
		"fallback": "streamline-plump:quotation-2-remix",
	});
}

export default Component;
