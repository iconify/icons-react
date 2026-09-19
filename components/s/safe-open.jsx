import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fs124bhwf.css';
import '../../css/m/ms8df3btg.css';
import '../../css/y/yth7llb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fs124bhwf"/><path class="ms8df3btg"/><path class="yth7llb8a"/></g>`,
		"fallback": "iconoir:safe-open",
	});
}

export default Component;
