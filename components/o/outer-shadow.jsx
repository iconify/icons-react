import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_tahrbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b d_tahrbsr"/>`,
		"fallback": "boxicons:outer-shadow",
	});
}

export default Component;
