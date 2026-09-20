import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7y7bpxwb.css';
import '../../css/u/u53qgwj4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7y7bpxwb"/><path class="u53qgwj4j"/>`,
		"fallback": "lets-icons:tree-fill",
	});
}

export default Component;
