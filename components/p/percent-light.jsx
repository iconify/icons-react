import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/cidikfavb.css';
import '../../css/x/xn6ppk3eg.css';
import '../../css/x/xg67yobqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="cidikfavb"/><circle class="xn6ppk3eg"/><circle class="xg67yobqd"/></g>`,
		"fallback": "lets-icons:percent-light",
	});
}

export default Component;
