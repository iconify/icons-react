import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e9g1nehmz.css';
import '../../css/q/qmfzxtvsj.css';
import '../../css/r/rz5abzbja.css';
import '../../css/f/f4z-1bd7p.css';
import '../../css/v/v2pqgyb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e9g1nehmz wm-shadow"/><path class="qmfzxtvsj wm-shadow"/><path class="rz5abzbja"/><path class="f4z-1bd7p"/><path class="v2pqgyb9i"/></g>`,
		"fallback": "withicons-brutal:thandai",
	});
}

export default Component;
