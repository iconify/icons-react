import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a6assn7kf.css';
import '../../css/a/a-3i-7bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a6assn7kf"/><path class="a-3i-7bhb"/></g>`,
		"fallback": "streamline-sharp:sun",
	});
}

export default Component;
