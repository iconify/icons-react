import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xey7e3bqc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xey7e3bqc"/>`,
		"fallback": "codicon:loading-compact",
	});
}

export default Component;
