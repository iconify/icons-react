import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfblkg3qp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfblkg3qp"/>`,
		"fallback": "iconoir:slips",
	});
}

export default Component;
