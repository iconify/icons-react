import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w848efbms.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w848efbms"/>`,
		"fallback": "streamline-plump-color:moustache-flat",
	});
}

export default Component;
