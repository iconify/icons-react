import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-y9v8bil.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-y9v8bil"/>`,
		"fallback": "codicon:vm",
	});
}

export default Component;
