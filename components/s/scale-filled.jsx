import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoskosbxd.css';
import '../../css/j/j1t29sstw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoskosbxd"/><path class="j1t29sstw"/>`,
		"fallback": "boxicons:scale-filled",
	});
}

export default Component;
