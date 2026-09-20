import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb7cp-bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb7cp-bpx"/>`,
		"fallback": "si:north-west-square-line",
	});
}

export default Component;
