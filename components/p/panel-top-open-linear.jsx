import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/g/g626xxb-k.css';
import '../../css/n/ng9gqebzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="g626xxb-k"/><path class="ng9gqebzk"/></g>`,
		"fallback": "solar:panel-top-open-linear",
	});
}

export default Component;
