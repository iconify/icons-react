import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_1b6abit.css';
import '../../css/z/ztdsiac1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_1b6abit"/><path class="ztdsiac1s"/>`,
		"fallback": "boxicons:owl",
	});
}

export default Component;
