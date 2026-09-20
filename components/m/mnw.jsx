import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn6p365rj.css';
import '../../css/q/qkzfnpbsa.css';
import '../../css/f/fl1-73ttc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn6p365rj"/><path class="qkzfnpbsa"/><path class="fl1-73ttc"/>`,
		"fallback": "token:mnw",
	});
}

export default Component;
