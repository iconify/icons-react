import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwlz_0bks.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwlz_0bks"/>`,
		"fallback": "codicon:settings-compact",
	});
}

export default Component;
