import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hax0k24xg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hax0k24xg"/>`,
		"fallback": "streamline-plump:screen-1-solid",
	});
}

export default Component;
