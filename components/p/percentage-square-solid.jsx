import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kow7hrb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kow7hrb2o"/>`,
		"fallback": "iconoir:percentage-square-solid",
	});
}

export default Component;
