import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlhx3cbtw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dlhx3cbtw"/>`,
		"fallback": "streamline-flex:line-arrow-expand-window-2-remix",
	});
}

export default Component;
