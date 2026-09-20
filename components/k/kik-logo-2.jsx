import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tux8vcb7u.css';
import '../../css/o/o2g_2gj1y.css';
import '../../css/t/tg_0xsuwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="tux8vcb7u"/><path class="o2g_2gj1y"/><path class="tg_0xsuwd"/></g>`,
		"fallback": "streamline-logos:kik-logo-2",
	});
}

export default Component;
