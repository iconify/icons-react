import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li2u5xh7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="li2u5xh7e"/>`,
		"fallback": "streamline-plump:padlock-square-2-solid",
	});
}

export default Component;
