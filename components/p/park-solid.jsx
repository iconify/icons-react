import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6y15mb9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6y15mb9x"/>`,
		"fallback": "streamline-plump:park-solid",
	});
}

export default Component;
