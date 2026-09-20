import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7wcwbb7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t7wcwbb7q"/>`,
		"fallback": "streamline-plump:multiple-stars-remix",
	});
}

export default Component;
