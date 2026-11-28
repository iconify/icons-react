import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6-2db7ux.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hkbzohbkc.css';
import '../../css/c/cjlrt-g2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6-2db7ux secondary"/><g class="dt0cm9dhy primary"><path class="hkbzohbkc"/><path class="cjlrt-g2c"/></g>`,
		"fallback": "iconaut:triangle-right-split-duo",
	});
}

export default Component;
