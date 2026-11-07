import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baf92pb0v.css';
import '../../css/o/oxe30nuth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baf92pb0v"/><path class="oxe30nuth"/>`,
		"fallback": "solar:screencast-2-bold-duotone",
	});
}

export default Component;
