import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plbs_mblk.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plbs_mblk"/>`,
		"fallback": "wpf:videocall",
	});
}

export default Component;
