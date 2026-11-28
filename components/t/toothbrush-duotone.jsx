import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6c_n6ydo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary q6c_n6ydo"/>`,
		"fallback": "iconaut:toothbrush-duotone",
	});
}

export default Component;
