import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdfw7y4er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary vdfw7y4er"/>`,
		"fallback": "iconaut:line-dashed-duotone",
	});
}

export default Component;
