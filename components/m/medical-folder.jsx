import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wlfplgbdd.css';
import '../../css/t/tg-ju6bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wlfplgbdd"/><path class="tg-ju6bqe"/></g>`,
		"fallback": "streamline-sharp:medical-folder",
	});
}

export default Component;
