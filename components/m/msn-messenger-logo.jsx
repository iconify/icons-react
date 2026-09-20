import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/oyrktuagv.css';
import '../../css/x/xz6rr6bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="oyrktuagv"/><path class="xz6rr6bvf"/></g>`,
		"fallback": "streamline-logos:msn-messenger-logo",
	});
}

export default Component;
