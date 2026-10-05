import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/ehuhc52sf.css';
import '../../css/q/q9_37ab9p.css';
import '../../css/t/ttioao7pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ehuhc52sf"/><path class="q9_37ab9p"/><path class="ttioao7pr"/></g>`,
		"fallback": "matita:type",
	});
}

export default Component;
