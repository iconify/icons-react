import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yz-mambcf.css';
import '../../css/g/gtl_j0d7u.css';
import '../../css/l/li_aljb3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yz-mambcf"/><path class="gtl_j0d7u"/><path class="li_aljb3v"/></g>`,
		"fallback": "streamline-cyber-color:mobile-phone-battery-medium-high",
	});
}

export default Component;
