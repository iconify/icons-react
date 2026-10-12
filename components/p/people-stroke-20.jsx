import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgtaqgb7g.css';
import '../../css/i/i0lowaczl.css';
import '../../css/z/zo595bdbk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgtaqgb7g"/><path class="i0lowaczl"/><path class="zo595bdbk"/>`,
		"fallback": "garden:people-stroke-20",
	});
}

export default Component;
