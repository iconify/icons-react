import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am40hgbik.css';
import '../../css/s/sw1fzi0kp.css';
import '../../css/c/ca43n7jlc.css';
import '../../css/w/w2c5_gbtn.css';
import '../../css/c/cpmme4boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am40hgbik"/><path class="sw1fzi0kp"/><path class="ca43n7jlc"/><path class="w2c5_gbtn"/><path class="cpmme4boy"/></g>`,
		"fallback": "streamline-ultimate-color:like-plus-one",
	});
}

export default Component;
