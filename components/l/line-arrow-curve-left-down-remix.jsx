import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vre4ikblv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vre4ikblv"/>`,
		"fallback": "streamline:line-arrow-curve-left-down-remix",
	});
}

export default Component;
