import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxgf4qeum.css';
import '../../css/c/c_ewb9bqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxgf4qeum"/><path class="c_ewb9bqx"/>`,
		"fallback": "token:mts",
	});
}

export default Component;
