import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyjnl-bos.css';
import '../../css/n/n-4vzx66a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uyjnl-bos"/><path class="n-4vzx66a"/></g>`,
		"fallback": "tdesign:noodle",
	});
}

export default Component;
