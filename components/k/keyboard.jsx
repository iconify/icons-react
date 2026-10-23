import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xs57kdb9i.css';
import '../../css/h/hzzf7bglq.css';
import '../../css/h/hslk2mt9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="xs57kdb9i"/><path class="hzzf7bglq"/><path class="hslk2mt9b"/></g>`,
		"fallback": "matita:keyboard",
	});
}

export default Component;
