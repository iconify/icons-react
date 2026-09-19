import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3ientf3j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3ientf3j"/>`,
		"fallback": "codicon:mic-off-compact",
	});
}

export default Component;
