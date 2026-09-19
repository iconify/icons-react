import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-bnw_0yk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-bnw_0yk"/>`,
		"fallback": "codicon:pass-filled",
	});
}

export default Component;
