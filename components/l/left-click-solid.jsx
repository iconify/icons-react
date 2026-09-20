import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz0rwkzja.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mz0rwkzja"/>`,
		"fallback": "streamline-flex:left-click-solid",
	});
}

export default Component;
