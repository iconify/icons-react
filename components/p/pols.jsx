import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzls2o0vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wzls2o0vs"/>`,
		"fallback": "token:pols",
	});
}

export default Component;
