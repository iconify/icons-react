import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbt3qw.css';
import '../../css/c/c_rqdr.css';
import '../../css/y/ydovum.css';
import '../../css/x/xhxeiv.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbt3qw"/><path class="c_rqdr ydovum"/><path class="xhxeiv ydovum"/>`,
		"fallback": "line-md:moon",
	});
}

export default Component;
