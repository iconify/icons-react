import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj_moacsg.css';
import '../../css/s/s2bjr04lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj_moacsg"/><path clip-rule="evenodd" class="s2bjr04lg"/>`,
		"fallback": "solar:ssd-square-bold",
	});
}

export default Component;
