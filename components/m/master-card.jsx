import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdxb9g3oh.css';
import '../../css/g/gb0c95-cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdxb9g3oh"/><path class="gb0c95-cj"/>`,
		"fallback": "uim:master-card",
	});
}

export default Component;
