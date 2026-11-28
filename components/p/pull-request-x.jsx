import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t12c4qa7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t12c4qa7j"/>`,
		"fallback": "noviair:pull-request-x",
	});
}

export default Component;
