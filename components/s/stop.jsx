import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh39n_l_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh39n_l_p"/>`,
		"fallback": "withicons-bauhaus:stop",
	});
}

export default Component;
