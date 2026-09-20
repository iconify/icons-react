import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yoywkzb6s.css';
import '../../css/x/x6fkcqb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yoywkzb6s"/><path class="x6fkcqb5p"/></g>`,
		"fallback": "streamline-sharp:phone-circle-off",
	});
}

export default Component;
