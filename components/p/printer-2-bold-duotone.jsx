import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpocmbbab.css';
import '../../css/i/i3sxkkaqb.css';
import '../../css/y/yvgtcy7ig.css';
import '../../css/f/ft4ucmq2j.css';
import '../../css/h/hxvt928-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpocmbbab"/><path class="i3sxkkaqb"/><path class="yvgtcy7ig"/><path class="ft4ucmq2j"/><path class="hxvt928-s"/>`,
		"fallback": "solar:printer-2-bold-duotone",
	});
}

export default Component;
