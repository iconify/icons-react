import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j21lmxkpv.css';
import '../../css/z/zueniel6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j21lmxkpv"/><path clip-rule="evenodd" class="zueniel6g"/>`,
		"fallback": "solar:sidebar-open-outline",
	});
}

export default Component;
