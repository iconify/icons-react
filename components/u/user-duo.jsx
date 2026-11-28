import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjtb_hbpd.css';
import '../../css/v/vu4dv3btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjtb_hbpd secondary"/><path class="primary vu4dv3btp"/>`,
		"fallback": "iconaut:user-duo",
	});
}

export default Component;
