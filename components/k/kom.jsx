import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl0rasbub.css';
import '../../css/v/vv-u_2-tu.css';
import '../../css/z/zmprxsbfz.css';
import '../../css/t/t-ih6nm7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl0rasbub"/><path class="vv-u_2-tu"/><path class="zmprxsbfz"/><path class="t-ih6nm7d"/>`,
		"fallback": "token:kom",
	});
}

export default Component;
