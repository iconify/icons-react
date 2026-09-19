import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz14lmj4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz14lmj4p"/>`,
		"fallback": "healthicons:wash-hands",
	});
}

export default Component;
