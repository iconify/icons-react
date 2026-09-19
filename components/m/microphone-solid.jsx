import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bknbsubyw.css';
import '../../css/i/ilvf25-qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="bknbsubyw"/><path class="ilvf25-qf"/></g>`,
		"fallback": "iconoir:microphone-solid",
	});
}

export default Component;
