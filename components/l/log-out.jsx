import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y12vu_lez.css';
import '../../css/q/qurrn3yiv.css';
import '../../css/z/z5fkfhvps.css';
import '../../css/c/ct-6f2bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow y12vu_lez"/><path class="qurrn3yiv wm-shadow"/><path class="z5fkfhvps"/><path class="ct-6f2bee"/></g>`,
		"fallback": "withicons-brutal:log-out",
	});
}

export default Component;
