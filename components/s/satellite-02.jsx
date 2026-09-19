import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz8iv6yzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz8iv6yzf"/>`,
		"fallback": "hugeicons:satellite-02",
	});
}

export default Component;
