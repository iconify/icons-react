import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvbw6otav.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvbw6otav"/>`,
		"fallback": "streamline-plump:ios-ipados-remix",
	});
}

export default Component;
